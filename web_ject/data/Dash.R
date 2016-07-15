
file <- read.csv('data_clean0.csv')

# file <- subset(file, continent=="Africa")
# file <- subset(file, continent=="Australia")
# file <- subset(file, continent=="Asia")
# file <- subset(file, continent=="North Ameria")
# file <- subset(file, continent=="Ocean")
file <- subset(file, continent=="South America")

file <- subset(file, mag>=6)

file <- file[c('latitude','longitude','mag')]

names(file)[1] <- paste("Lat")
names(file)[2] <- paste("Long")
names(file)[3] <- paste("Magnitude")

# write.csv(file,file="af.csv",row.names=FALSE)
# write.csv(file,file="au.csv",row.names=FALSE)
# write.csv(file,file="as.csv",row.names=FALSE)
# write.csv(file,file="oc.csv",row.names=FALSE)
write.csv(file,file="sa.csv",row.names=FALSE)
