package com.awesomeproject;

import android.os.Bundle; // 启动页
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // 启动页

public class MainActivity extends ReactActivity {
    // 启动页相关
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }
}
