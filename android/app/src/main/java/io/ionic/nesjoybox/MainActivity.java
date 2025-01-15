package io.ionic.nesjoybox;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

import io.ionic.nesjoybox.plugins.alert.Alert;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        new AppContext(this);
        super.onCreate(savedInstanceState);
    }
}
