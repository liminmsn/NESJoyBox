package io.ionic.nesjoybox.modules.HLSPlay;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.res.Configuration;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;


import com.getcapacitor.JSObject;

import org.json.JSONException;
import org.json.JSONObject;

import io.ionic.nesjoybox.R;

public class HLSPlay extends AppCompatActivity {
    VideoView video_view;
    MediaController mediaController;
    LinearLayout layout_loading;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.hls_play);
        layout_loading = findViewById(R.id.loading);
        initConfig();
        initHlsPlay();
        startViewUrl();
    }

    private void startViewUrl() {
        // 接收传递过来的 Intent
        Intent intent = getIntent();
        // 从 Intent 中获取 JSONObject 数据
        try {
            String jsonString = intent.getStringExtra("obj");
            JSONObject js_obj = new JSONObject(jsonString);
            // 在这里处理接收到的 JSONObject 数据
            String url = (String) js_obj.get("url");
            video_view.setVideoURI(Uri.parse(url));
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
//        Uri uri = Uri.parse("https://live.wjyanghu.com/live/CH1.m3u8");
//        video_view.setVideoURI(uri);
    }

    @SuppressLint("ClickableViewAccessibility")
    private void initHlsPlay() {
        video_view = findViewById(R.id.videoView);
        mediaController = new MediaController(this);
        video_view.setMediaController(mediaController);
        //加载完成自动播放
        video_view.setOnPreparedListener(mp -> {
            video_view.start();
            layout_loading.setVisibility(View.GONE);
        });
        //播放出错就提示
        video_view.setOnErrorListener((mp, what, extra) -> {
            Toast.makeText(this, "播放出错", Toast.LENGTH_SHORT).show();
            return true;
        });
        //视频缓存卡住
        video_view.setOnInfoListener((mp, what, extra) -> {
            switch (what) {
                case MediaPlayer.MEDIA_INFO_BUFFERING_START:
                    // 视频开始卡住，执行相关逻辑
                    // 您可以在这里处理视频卡住的情况
                    layout_loading.setVisibility(View.VISIBLE);
                    break;
                case MediaPlayer.MEDIA_INFO_BUFFERING_END:
                    layout_loading.setVisibility(View.GONE);
                    // 视频卡住结束，继续播放
                    // 可以在这里添加继续播放视频的逻辑
                    break;
            }
            return false;
        });
    }

    /**
     * 设置布局高度沾满
     */
    private void LayoutHeightFull(boolean bol) {
        ViewGroup.LayoutParams params = video_view.getLayoutParams();
        if (bol) {
            params.height = ViewGroup.LayoutParams.MATCH_PARENT; //设置布局
        } else {
            params.height = ViewGroup.LayoutParams.WRAP_CONTENT; //设置布局
        }
        video_view.setLayoutParams(params);
    }

    /**
     * 初始化布局内容
     */
    private void initConfig() {
        // 使布局内容延伸到状态栏和刘海区域
        View decorView = getWindow().getDecorView();
        int uiOptions = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_FULLSCREEN // 隐藏状态栏
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // 隐藏底部导航栏
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY; // 使其不可恢复
        decorView.setSystemUiVisibility(uiOptions);
        // 配置内容适应刘海区域
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }
    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        // 屏幕旋转到横屏
        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
            LayoutHeightFull(true);
            // 屏幕旋转到竖屏
        } else if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT) {
            LayoutHeightFull(false);
        }
    }
}
