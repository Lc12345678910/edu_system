import com.aliyun.oss.ClientException;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.vod.model.v20170321.GetVideoPlayAuthRequest;
import com.aliyuncs.vod.model.v20170321.GetVideoPlayAuthResponse;
import com.zh.oes.vod.utils.VodInitUtil;
import org.junit.Test;

/**
 2
 * 获取视频播放凭证
 3
 * @throws ClientException
4
 */
public class TestVod {

    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        //根据视频id获取视频凭证
        //创建初始化对象
        DefaultAcsClient client = VodInitUtil.initVodClient("LTAI5t8fjJY8AxGijMYyFDSg", "BVtW0iF0T2N5eg4H6hjWzu54mZ66Sf");
//        DefaultAcsClient client = InitObject.initVodClient("LTAI5t8fjJY8AxGijMYyFDSg", "BVtW0iF0T2N5eg4H6hjWzu54mZ66Sf");
        //创建获取视频凭证的request和response对象
        GetVideoPlayAuthRequest request = new GetVideoPlayAuthRequest();
        GetVideoPlayAuthResponse response = new GetVideoPlayAuthResponse();
        //向request对象里面设置视频id
        request.setVideoId("a01e963a026371f09eb46633b79f0102");
        //调用初始化对象里面的方法，传递request，获取response
        response = client.getAcsResponse(request);
        System.out.println("凭证" + response.getPlayAuth());
    }
}

