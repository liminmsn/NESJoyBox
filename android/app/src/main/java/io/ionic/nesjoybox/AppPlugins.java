package io.ionic.nesjoybox;

import com.getcapacitor.Plugin;

import java.util.List;
import io.ionic.nesjoybox.plugins.alert.Alert;
import io.ionic.nesjoybox.plugins.router.Router;

public class AppPlugins {
    public interface PluginCallObj {
        void call(List<Class<? extends Plugin>> obj_arr);
    }

    /**插件列表List*/
    List<Class<? extends Plugin>> plugins = List.of(Alert.class, Router.class);
    public AppPlugins(PluginCallObj call_obj) {
        call_obj.call(plugins);
    }
}
