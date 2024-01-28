FROM ubuntu:latest

WORKDIR /linux_practice_level2

RUN apt-get update && apt-get install -y vim
RUN mkdir /restricted
RUN mkdir /restricted/bin
RUN cp /usr/bin/cat /restricted/bin/
RUN chmod +x /restricted/bin/cat
RUN cp /usr/bin/grep /restricted/bin/
RUN chmod +x /restricted/bin/grep
RUN cp /bin/ls /restricted/bin/
RUN chmod +x /restricted/bin/ls
RUN cp /bin/rbash /restricted/bin/
RUN chmod +x /restricted/bin/rbash
RUN cp /usr/bin/su /restricted/bin/
RUN chmod +x /restricted/bin/su
RUN cp /usr/sbin/useradd /restricted/bin/
RUN chmod +x /restricted/bin/useradd
RUN cat > file1.txt <<EOF
secret=l
sercet=q
sercet=e
secret=i
seoret=v
secrrt=z
seeret=i
secret=n
seccet=f
secrct=p
secret=u
sccert=e
secree=p
secret=x
EOF

ENV PATH=/restricted/bin

CMD ["/bin/rbash"]
