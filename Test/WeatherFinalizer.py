import requests

def main():
    response = requests.get('http://127.0.0.1:4000/weather/data/64109/')
    print(response.content)
    print(response.status_code)


if __name__ == "__main__":
    main()