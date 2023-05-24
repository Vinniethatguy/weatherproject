import requests
import Weather.credentials
import datetime
import calendar


def current_weather_data_seperator(data):
    # receives data in unix epoch time
    epoch = data['dt']
    full = str(datetime.datetime.fromtimestamp(epoch))
    time = [int(x) for x in full.split(' ')[0].split('-')]
    date_object = datetime.date(time[0], time[1], time[2])
    day_of_week = date_object.strftime('%A')
    date_time = f'{calendar.month_name[time[1]]} {time[2]}, {time[0]}'
    url_setter = data['weather'][0]['main']
    temp = data['main']['temp']
    low_temp = data['main']['temp_min']
    high_temp = data['main']['temp_max']
    return [day_of_week, date_time, temp, low_temp, high_temp, url_setter]


def day_data_seperator(data):
    time = [int(x) for x in data[0]['dt_txt'].split(' ')[0].split('-')]
    date_object = datetime.date(time[0], time[1], time[2])
    low_temp = float('inf')
    high_temp = float('-inf')
    day_of_week = date_object.strftime('%A')
    date_time = f'{calendar.month_name[time[1]]} {time[2]}, {time[0]}'
    url_setter = data[4]['weather'][0]['main']

    for index, hour_set in enumerate(data):
        if hour_set['main']['temp_min'] < low_temp:
            low_temp = hour_set['main']['temp_min']
        if hour_set['main']['temp_max'] > high_temp:
            high_temp = hour_set['main']['temp_max']

    return [day_of_week, date_time, None, low_temp, high_temp, url_setter]


def weather_project_json(lat, lon):
    api_key = Weather.credentials.get_api_key()
    if len(api_key) != 0:
        full_data = []
        today_endpoint = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={api_key}'
        week_endpoint = f'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=imperial&appid={api_key}'

        response = requests.get(today_endpoint)
        today_data = response.json()

        response = requests.get(week_endpoint)
        week_data = response.json()
        full_data.append(current_weather_data_seperator(today_data))

        days = [week_data['list'][index:index + 8] for index in range(0, len(week_data['list']), 8)]
        for day in days:
            full_data.append(day_data_seperator(day))
            
        for x in full_data:
            print(x)
        return full_data

    else:
        print("No Api Key Provided")
