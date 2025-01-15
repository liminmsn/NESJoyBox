package io.ionic.nesjoybox.plugins.router;

import android.app.Activity;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.HashMap;

import io.ionic.nesjoybox.AppContext;

@CapacitorPlugin
public class Router extends Plugin {
    HashMap<String,Class<? extends Activity>> page_list = new HashMap<>();
    @PluginMethod
    void ToPage(PluginCall call){

        AppContext.getAppPageMap().map_page.get("");
    }
}
