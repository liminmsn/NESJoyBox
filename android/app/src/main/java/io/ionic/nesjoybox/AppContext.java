package io.ionic.nesjoybox;

import com.getcapacitor.BridgeActivity;

import java.util.List;

import io.ionic.nesjoybox.modules.HLSPlay.HLSPlay;

public class AppContext {
    static AppContext I;


    public static AppPageMap getAppPageMap() {
        return I.AppPageMap;
    }

    public static BridgeActivity getBridge() {
        return I.bridgeActivity;
    }


    BridgeActivity bridgeActivity;
    private final AppPageMap AppPageMap;

    AppContext(BridgeActivity bridgeActivity) {
        this.bridgeActivity = bridgeActivity;
        //初始化所有插件
        new AppPlugins(bridgeActivity::registerPlugins);
        //初始化原生页面列表
        AppPageMap = new AppPageMap(List.of(HLSPlay.class));

        I = this;
    }
}
