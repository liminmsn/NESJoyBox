package io.ionic.nesjoybox;

import java.util.HashMap;
import java.util.List;
import android.app.Activity;
import android.os.Build;

public class AppPageMap {
    public HashMap<String, Class<? extends Activity>> map_page = new HashMap<>();

    public AppPageMap(List<Class<? extends Activity>> list_page) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            //添加视频原生页面
            list_page.forEach(item -> {
                map_page.put(item.getSimpleName(), item);
            });
        }
        System.out.println(map_page.size());
    }
}
