package io.ionic.nesjoybox.modules.HLSPlay;

import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import android.widget.VideoView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.ionic.nesjoybox.R;

public class HLSPlay extends AppCompatActivity {
    VideoView video_view;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.hls_play);
        initHlsPlay();
    }

    public void initHlsPlay() {
        Uri uri = Uri.parse("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
        video_view = findViewById(R.id.videoView);
        video_view.setVideoURI(uri);

        int[] btn_id_arr = {R.id.play};
        for (int btn_id : btn_id_arr) {
            Button btn = this.findViewById(btn_id);
            btn.setOnClickListener(view -> {
                onBtnDown((String) btn.getText());
            });
        }
    }

    public void onBtnDown(String btn_name) {
        switch (btn_name) {
            case "Play":
                video_view.start();
                break;
        }
    }
}
