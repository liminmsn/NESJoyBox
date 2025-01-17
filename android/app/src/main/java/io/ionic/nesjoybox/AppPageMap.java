package io.ionic.nesjoybox;

import java.util.HashMap;
import java.util.List;
import android.os.Build;
import androidx.appcompat.app.AppCompatActivity;

public class AppPageMap {
    public HashMap<String, Class<? extends AppCompatActivity>> map_page = new HashMap<>();

    public AppPageMap(List<Class<? extends AppCompatActivity>> list_page) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            //添加视频原生页面
            list_page.forEach(item -> {
                map_page.put(item.getSimpleName(), item);
            });
        }
        System.out.println(map_page.size());
    }
}
