package io.ionic.nesjoybox;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(Alert.class);
        super.onCreate(savedInstanceState);
    }
}
