
file <- read.csv('data_clean0.csv')

# file <- subset(file, continent=="Europe")
# file <- subset(file, continent=="Africa")
# file <- subset(file, continent=="Australia")
file <- subset(file, continent=="Asia")

file <- file[c('mag_group','depth_group')]

res<- table(file)

write.table(res, file="as5.csv", sep=",",row.names=FALSE)
