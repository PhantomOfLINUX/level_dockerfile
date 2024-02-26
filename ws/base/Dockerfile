# Node.js 환경을 제공하는 기본 이미지를 사용합니다.
FROM node:14

# 기존 환경 변수 및 사용자 설정을 유지할 수 있습니다.
ENV stage=stage01
ARG stage=stage01

# 네이티브 모듈 빌드를 위한 빌드 도구 설치
RUN apt-get update && apt-get install -y build-essential python

# 사용자 추가
RUN useradd -ms /bin/bash $stage
RUN echo "$stage:0000" | chpasswd

#접속시 출력 화면 파일 복사
COPY start.sh /home/$stage/
WORKDIR /home/$stage
RUN echo | cat start.sh >> .bashrc
RUN rm -rf start.sh

# 웹소켓 서버 코드를 이미지에 복사합니다.
# 'websocket-server' 폴더에 웹소켓 서버 관련 코드가 있다고 가정합니다.
COPY ../src/ws_pty.js /home/$stage/app/

# 작업 디렉토리 설정
WORKDIR /home/$stage/app

# 의존성 설치. 'ws' 및 'node-pty' 라이브러리를 포함한 필요한 모든 패키지를 설치합니다.
RUN npm install node-pty ws

# 소유권 변경
RUN chown -R $stage /home/$stage

# 사용자 변경
USER $stage

# 웹소켓 서버 실행 명령. 'index.js'는 웹소켓 서버의 메인 파일이라고 가정합니다.
CMD ["node", "ws_pty.js"]

