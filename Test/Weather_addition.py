import requests
def read_file():
    complete_data =[]
    with open('uscities.csv', 'r') as file:
        for index, line in enumerate(file):
            if index == 0:
                data = line.split(',')
                print(data)
            if index != 0:
                data = line.split(',')
                city = data[0]
                state_name = data[3]
                state_id = data[2]
                latitude = data[6]
                longitude = data[7]
                zipcodes = data[-2]
                new_line = (city,state_name,state_id,latitude,longitude,zipcodes)
                complete_data.append(new_line)
    return complete_data

def main():
    information = read_file()
    for line in information:
        print(line)
        # new_line = (city, state_name, state_id, latitude, longitude, zipcodes)
        data = {
            "city": line[0],
            "state_name" : line[1],
            "state_id" : line[2],
            "latitude" : line[3],
            "longitude": line[4],
            "zip_codes": line[5]
        }
        response = requests.post('http://127.0.0.1:8000/weather/add_city/',data=data)
        print(response)
        print(response.content)


if __name__ == "__main__":
    main()