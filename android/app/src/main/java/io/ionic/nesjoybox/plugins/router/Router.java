package io.ionic.nesjoybox.plugins.router;
import android.app.Activity;
import android.content.Intent;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.HashMap;

import io.ionic.nesjoybox.AppContext;

@CapacitorPlugin
public class Router extends Plugin {
    @PluginMethod
    public void openPage(PluginCall call) {
        String page_name = call.getString("url");
        if (page_name != null) {
            Class<? extends Activity> page_class = AppContext.getAppPageMap().map_page.get(page_name);
            if (page_class != null) {
                BridgeActivity bridgeActivity = AppContext.getBridge();
                Intent intent = new Intent(bridgeActivity, page_class);
                bridgeActivity.startActivity(intent);
            }
        }
        call.resolve();
    }
}
