
file <- read.csv('data_clean0.csv')

file <- subset(file, continent=="Europe")

file <- file[c('mag_group','depth_group')]
