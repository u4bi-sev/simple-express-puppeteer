# Simple-express-puppeteer

## Installation

```shell
$ git clone https://github.com/myungjaeyu/simple-express-puppeteer

$ npm install

$ npm start
```

## Deploy in Docker Container

```shell
$ docker-compose build && docker-compose up
```

## Usage

**URL** : `http://localhost:3000/naver`

```json
{
    "url": "https://www.naver.com",
    "data": [
        {
            "id": 0,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_151922390612.jpg",
            "content": "\n스티브 잡스도 애용하는 \n똑똑해 보이는 몸짓\n'몸짓 읽어 주는 여자'\n"
        }, {
            "id": 1,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_152744859316.jpg",
            "content": "\n빛나는 별들, \n명성 앞에 흔들리는 사람들\n'우상들과의 점심'\n"
        }, {
            "id": 2,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_153209997764.jpg",
            "content": "\n전국 독서 모임에서 \n미친 몰입도라고 난리 난 책\n'베어타운'\n"
        }, {
            "id": 3,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_153659996402.jpg",
            "content": "\n쾌적한 수면을 선사하는\n7가지 습관\n'당신의 뇌는 최적화를 원한다'\n"
        }, {
            "id": 4,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_154157142216.jpg",
            "content": "\n출간전연재\n3회. 불안함을 달래줬던 \n피자의 기억\n'어머니에게 드리는 100가지 질문'\n"
        }, {
            "id": 5,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_154247536428.jpg",
            "content": "\n출간전연재\n9회. 국민 간식 호떡 안에는 \n원래 꿀이 없었다고?\n'단어로 읽는 5분 한국사'\n"
        }, {
            "id": 6,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_154429831448.jpg",
            "content": "\n요즘 어르신들에게 인기! \n큰글자책 무료 증정 이벤트\n~6.25(월)  한국도서관협회\n"
        }, {
            "id": 7,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_154848393389.jpg",
            "content": "\n이벤트\n'스웨덴은 어떻게 \n원하는 삶을 사는가'\n월드컵 관련 굿즈 3명 증정\n"
        }, {
            "id": 8,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_155213647892.jpg",
            "content": "\n파워라이터 ON\n안네 프랑크와 \n넬슨 만델라\n임지현  기억 전쟁\n"
        }, {
            "id": 9,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_155606767248.jpg",
            "content": "\n농민문학을 대표하는 작품\n심훈의 장편소설 '상록수'\n지식백과  한국 근대문학\n"
        }, {
            "id": 10,
            "image": "https://s.pstatic.net/static/www/mobile/edit/2018/0615/mobile_161521628636.jpg",
            "content": "\n아버지 뒤를 이어 새로운\n시대를 연 싱가포르 총리\n지식백과  리센룽\n"
        }
    ]
}
```