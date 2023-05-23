import requests

def main():
    response = requests.get('http://127.0.0.1:2000/weather/data/58801/')
    print(response.content)
    print(response.status_code)


if __name__ == "__main__":
    main()