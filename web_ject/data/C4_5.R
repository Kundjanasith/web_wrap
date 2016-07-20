file <- read.csv('data_clean0.csv')
file <- subset(file, mag>=5 & mag<6 )

file <- subset(file, depth<0 | depth>10 )

file <- subset(file, depth<10 | depth>100 )

file <- subset(file, depth<110 | depth>190 )

file <- subset(file, depth<210 | depth>290 )

file <- subset(file, depth<310 | depth>390 )

file <- subset(file, depth<410 | depth>490 )

file <- subset(file, depth<510 | depth>690 )

print(nrow(file))
# print(table(file['depth']))
file <- file[c('latitude','longitude','depth')]
names(file)[1] <- paste("Lat")
names(file)[2] <- paste("Long")
write.csv(file, file="C5_6.csv", row.names=FALSE)
