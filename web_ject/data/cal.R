file <- read.csv('data_clean0.csv')
s <- 2010
f <- 2020
file <- subset(file, file$Year>=s&file$Year<=f)
#file$Date <- paste('new Date(',file$Year,',',file$Month,',',file$Day,')')
#file <- file[c('Date','mag')]
file$count <- "temp"
for( i in s:f ){
	for( j in 1:12 ){
		for( k in 1:31 ){
			file$count <- ifelse( file$Year==i&file$Month==j&file$Day==k, nrow(subset(file, Year==i&Month==j&Day==k)), file$count )
		}
	}
}
file$Month <- as.numeric(file$Month)-1
file$Date <- paste('new Date(',file$Year,',',file$Month,',',file$Day,')')
file <- file[c('Date','count')]
names(file)[2] <- paste("Frequency")
file <- unique(file)
print( nrow(file)) 
print(file)
file$fuck <- paste("fuck")
#file$Year <- as.numeric(file$Year)-1
write.csv(file, file="cal.csv", row.names=FALSE)
