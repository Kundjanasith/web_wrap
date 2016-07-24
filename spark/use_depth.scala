import org.apache.spark.mllib.tree.RandomForest
import org.apache.spark.mllib.tree.model.RandomForestModel
import org.apache.spark.mllib.util.MLUtils
 val sameModel = RandomForestModel.load(sc, "model/depth_model")
