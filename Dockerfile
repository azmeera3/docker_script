FROM ubuntu 
WORKDIR /tmp
RUN echo "hello_ganga" > /tmp/gangafile
ENV myname sai
COPY devopsfile /home
ADD linux.tar.gz /root 
