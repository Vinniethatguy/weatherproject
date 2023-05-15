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
    for city in information:
        print(city[0])

if __name__ == "__main__":
    main()