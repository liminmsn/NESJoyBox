package io.ionic.nesjoybox.modules.HLSPlay;

import android.annotation.SuppressLint;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;


import io.ionic.nesjoybox.R;

public class HLSPlay extends AppCompatActivity {
    VideoView video_view;
    MediaController mediaController;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 使布局内容延伸到状态栏和刘海区域
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            View decorView = getWindow().getDecorView();
            int uiOptions = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    |View.SYSTEM_UI_FLAG_FULLSCREEN // 隐藏状态栏
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // 隐藏底部导航栏
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY; // 使其不可恢复
            decorView.setSystemUiVisibility(uiOptions);
            // 配置内容适应刘海区域
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            }
        }

        setContentView(R.layout.hls_play);
        initHlsPlay();
    }

    @SuppressLint("ClickableViewAccessibility")
    public void initHlsPlay() {
        video_view = findViewById(R.id.videoView);
        mediaController = new MediaController(this);
        video_view.setMediaController(mediaController);

        Uri uri = Uri.parse("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
        video_view.setVideoURI(uri);

        /*----以下下事件绑定-----*/
        video_view.setOnPreparedListener(mp -> video_view.start()); //加载完成自动播放
        video_view.setOnErrorListener((mp, what, extra) -> {        //播放出错就提示
            Toast.makeText(this, "播放出错", Toast.LENGTH_SHORT).show();
            return true;
        });
    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);

        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            // 屏幕旋转到横屏
            getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        } else if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT) {
            // 屏幕旋转到竖屏
            // 做相应的处理
        }
    }
}
