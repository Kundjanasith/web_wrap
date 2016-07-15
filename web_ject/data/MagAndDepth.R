
file <- read.csv('data_clean0.csv')

# file <- subset(file, continent=="Europe")
file <- subset(file, continent=="Africa")

file <- file[c('mag_group','depth_group')]

res<- table(file)

write.table(res, file="af5.csv", sep=",",row.names=FALSE)
