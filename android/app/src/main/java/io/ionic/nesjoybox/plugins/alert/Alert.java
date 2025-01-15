package io.ionic.nesjoybox.plugins.alert;

import android.widget.Toast;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin
public class Alert extends Plugin {
    @PluginMethod
    public void showTips(PluginCall call){
        String val = call.getString("value");
        Toast.makeText(getContext(),val,Toast.LENGTH_SHORT).show();
        call.resolve();
    }
}
