package io.ionic.nesjoybox;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import io.ionic.nesjoybox.plugins.MainPlugins;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        new MainPlugins().Init();
    }
}
