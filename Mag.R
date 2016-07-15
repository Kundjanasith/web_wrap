file <- read.csv('data_clean0.csv')
file <- subset(file, continent=="Africa")
file <- file['mag_group']
