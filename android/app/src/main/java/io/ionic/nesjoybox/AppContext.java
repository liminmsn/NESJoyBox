package io.ionic.nesjoybox;

import com.getcapacitor.BridgeActivity;

import java.util.List;

import io.ionic.nesjoybox.modules.HSLPlay;

public class AppContext {
    static AppContext I;

    public static AppContext getContext() {
        return I;
    }
    public static AppPageMap getAppPageMap() {
        return I.AppPageMap;
    }


    private AppPageMap AppPageMap;

    AppContext(BridgeActivity bridgeActivity) {
        //初始化所有插件
        new AppPlugins(bridgeActivity::registerPlugins);
        //初始化原生页面列表
        AppPageMap = new AppPageMap(List.of(HSLPlay.class));

        I = this;
    }
}
