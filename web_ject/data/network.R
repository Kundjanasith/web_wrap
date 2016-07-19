file <- read.csv('data_clean0.csv')
# temp <- subset(file, mag>=8)
temp <- subset(file, continent!="Ocean"&country!="Ocean")

temp$source <- temp$country
temp$target <- temp$continent
temp$type <- temp$depth_group

temp <- temp[c('source','target','type')]
temp$type <- "type1"
temp <- unique(temp)
# temp$type <- ifelse(temp$type==3, "type3", temp$type)
# temp$type <- ifelse(temp$type==2, "type2", temp$type)
# temp$type <- ifelse(temp$type==1, "type1", temp$type)
write.csv(temp, file="links1.csv", row.names=FALSE)

# temp2 <- subset(file, mag>=8)
temp2 <- subset(file, continent!="Ocean"&country!="Ocean")
temp2$node <- temp2$country
temp2$group <- temp2$continent

temp2 <- temp2[c('node','group')]
temp2$group <- "group1"
# temp2$group <- ifelse(temp2$group=="South America","group2",temp2$group)
# temp2$group <- ifelse(temp2$group=="Europe","group3",temp2$group)
# temp2$group <- ifelse(temp2$group=="Africa","group4",temp2$group)
# temp2$group <- ifelse(temp2$group=="Asia","group5",temp2$group)
# temp2$group <- ifelse(temp2$group=="Australia","group6",temp2$group)
temp2 <- unique(temp2)
write.csv(temp2, file="nodes1.csv", row.names=FALSE)
