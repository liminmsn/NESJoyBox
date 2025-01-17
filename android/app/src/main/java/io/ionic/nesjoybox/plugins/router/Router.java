package io.ionic.nesjoybox.plugins.router;

import io.ionic.nesjoybox.AppContext;

import android.content.Intent;

import androidx.appcompat.app.AppCompatActivity;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin
public class Router extends Plugin {
    @PluginMethod
    public void openPage(PluginCall call) {
        String view_page = call.getString("path");
        if (view_page != null) {
            Class<? extends AppCompatActivity> page_class = AppContext.getAppPageMap().map_page.get(view_page);
            if (page_class != null) {
                BridgeActivity bridgeActivity = AppContext.getBridge();
                Intent intent = new Intent(bridgeActivity, page_class);
                JSObject js_object = call.getObject("obj");
                if (js_object != null) {
                    intent.putExtra("obj", js_object.toString());
                }
                bridgeActivity.startActivity(intent);
            }
        }
        call.resolve();
    }
}
