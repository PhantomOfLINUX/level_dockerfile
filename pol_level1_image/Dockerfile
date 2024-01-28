FROM ubuntu:latest

WORKDIR /linux_practice_level1

RUN apt-get update && apt-get install -y vim
RUN mkdir /restricted
RUN mkdir /restricted/bin
RUN cp /bin/ls /restricted/bin/
RUN chmod +x /restricted/bin/ls
RUN cp /bin/rbash /restricted/bin/
RUN chmod +x /restricted/bin/rbash
RUN cp /usr/bin/su /restricted/bin/
RUN chmod +x /restricted/bin/su
RUN cp /usr/sbin/useradd /restricted/bin/
RUN chmod +x /restricted/bin/useradd
RUN touch test_file1.txt
RUN touch .hidden_test_file1.txt
ENV PATH=/restricted/bin

CMD ["/bin/rbash"]
