package io.ionic.nesjoybox;

import android.app.AlertDialog;
import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Alert")
public class Alert extends Plugin {
    @PluginMethod()
    public void echo(PluginCall call){
        Context content = getContext();

        Object val = call.getString("value");

        AlertDialog alert =  new AlertDialog.Builder(content)
                .setView(R.layout.custom_dialog_layout) // 自定义布局
                .create();
        alert.show();



        JSObject ret = new JSObject();
        ret.put("value", val);
        call.resolve(ret);
    }
}
