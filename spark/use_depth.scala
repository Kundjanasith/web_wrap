import org.apache.spark.mllib.tree.RandomForest
import org.apache.spark.mllib.tree.model.RandomForestModel
import org.apache.spark.mllib.util.MLUtils
 val sameModel = RandomForestModel.load(sc, "model/depth_model")

import org.apache.spark.mllib.linalg.{Vector, Vectors}


var i = 0; // 2016 - 2027
var j = 0; // 1 - 13
var k = 0; // 1 - 32
var z = 0; // 0 - 191
for ( i <- 2016 until 2027 ){
  for ( j <- 1 until 13 ){
    for ( k <- 1 until 32 ){
      for ( z <- 0 until 191 ){
        var year = i;
        var month = j;
        var day = k;
        var country = z;
        val dv: Vector = Vectors.dense( latitude, longitude, continent, country, day, month, year)
      }
    }
  }
}
