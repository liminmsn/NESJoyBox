package io.ionic.nesjoybox;

import com.getcapacitor.Plugin;

import java.util.List;

import io.ionic.nesjoybox.plugins.alert.Alert;


public class MainPlugins {
    public interface PluginCallObj {
        void call(List<Class<? extends Plugin>> obj_arr);
    }
    /**插件列表List*/
    List<Class<? extends Plugin>> plugins = List.of();
    public MainPlugins(PluginCallObj call_obj) {
        plugins.add(Alert.class); //弹窗插件

        call_obj.call(plugins);
    }
}
