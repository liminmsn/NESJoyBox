package io.ionic.nesjoybox.modules;

import android.os.Bundle;
import android.widget.Button;
import android.widget.VideoView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.ionic.nesjoybox.R;

public class HSLPlay extends AppCompatActivity {
    VideoView view;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.hls_play);

    }

    public void initHlsPlay() {
        int[] btn_id_arr = {R.id.play};
        for (int btn_id : btn_id_arr) {
            Button btn = this.findViewById(btn_id);
            btn.setOnClickListener(view->{

            });
        }
    }

    public void onBtnDown(String btn_name){
        switch (btn_name){

        }
    }
}
