
df1 <- read.csv('data_clean0.csv')

# df1 <- subset(df1, continent=="Europe")
# df1 <- subset(df1, continent=="Africa")
# df1 <- subset(df1, continent=="Australia")
# df1 <- subset(df1, continent=="Asia")
df1 <- subset(df1, continent=="North America")

df1$Count <- 1

df2 <- aggregate(df1[c("Count")], by=list(country=df1$country), FUN=sum, na.rm=TRUE)

df2 <- df2[order(-df2$Count),]

 x <- df2[1:5,]

 print(x)

v5 <- "x"
v4 <- "x"
v3 <- "x"
v2 <- "x"
v1 <- "x"

 for(i in x$country){
   v5 <- c(v5,nrow(subset(df1, df1$country==i&df1$mag_group==5)))
    v4 <- c(v4,nrow(subset(df1, df1$country==i&df1$mag_group==4)))
     v3 <- c(v3,nrow(subset(df1, df1$country==i&df1$mag_group==3)))
      v2 <- c(v2,nrow(subset(df1, df1$country==i&df1$mag_group==2)))
       v1 <- c(v1,nrow(subset(df1, df1$country==i&df1$mag_group==1)))
      # print(i)
 }

v1 <- v1[2:6]
v2 <- v2[2:6]
v3 <- v3[2:6]
v4 <- v4[2:6]
v5 <- v5[2:6]

res1 <- c(v1[1],v2[1],v3[1],v4[1],v5[1])
res2 <- c(v1[2],v2[2],v3[2],v4[2],v5[2])
res3 <- c(v1[3],v2[3],v3[3],v4[3],v5[3])
res4 <- c(v1[4],v2[4],v3[4],v4[4],v5[4])
res5 <- c(v1[5],v2[5],v3[5],v4[5],v5[5])



df1 <- df1[1:5]

df1 <- data.frame(df1$country,df1$Count)
print(df1)

temp <- data.frame(v1,v2,v3,v4,v5)
print(temp)

res <- cbind(x,temp)

print(res)

# print(names(res))

names(res)[3] <- paste("[4.0 - 4.9]")
names(res)[4] <- paste("[5.0 - 5.9]")
names(res)[5] <- paste("[6.0 - 6.9]")
names(res)[6] <- paste("[7.0 - 7.9]")
names(res)[7] <- paste("[8.0 - 12.0]")

print(res)

# write.csv(res,file="eu4.csv",row.names=FALSE)
# write.csv(res,file="af4.csv",row.names=FALSE)
# write.csv(res,file="au4.csv",row.names=FALSE)
# write.csv(res,file="as4.csv",row.names=FALSE)
write.csv(res,file="na4.csv",row.names=FALSE)
