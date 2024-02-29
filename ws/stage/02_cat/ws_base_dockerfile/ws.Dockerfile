# Node.js 환경을 제공하는 기본 이미지를 사용합니다.
FROM nodejs_base_image:latest

# 네이티브 모듈 빌드를 위한 빌드 도구 설치
RUN dnf update -y && dnf install -y gcc gcc-c++ make python3

#작업 디렉토리 설정
WORKDIR /home

RUN mkdir /home/ws

# 웹소켓 서버 코드를 이미지에 복사합니다.
COPY ./src/ws_pty.js /home/ws/

# 'websocket-server' 폴더에 웹소켓 서버 관련 코드가 있다고 가정합니다.
WORKDIR /home/ws

# 의존성 설치. 'ws' 및 'node-pty' 라이브러리를 포함한 필요한 모든 패키지를 설치합니다.
RUN npm install node-pty ws

# 웹소켓 서버 실행 명령. 'index.js'는 웹소켓 서버의 메인 파일이라고 가정합니다.
CMD ls /home/ws/
