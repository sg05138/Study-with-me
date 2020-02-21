package com.example.myapplication;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    private EditText edit;
    private int num;
    private boolean flag = false;
    private int where=0;
    private Button button1, button2, button3,
            buttonP, button4, button5, button6, buttonX, button7, buttonH,
            button8, button9, buttonD, button0, buttonR, buttonC, buttonM;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toast.makeText(getApplicationContext(),"Calculator",Toast.LENGTH_SHORT).show();

        button1=(Button)findViewById(R.id.button1);
        button2=(Button)findViewById(R.id.button2);
        button3=(Button)findViewById(R.id.button3);
        buttonP=(Button)findViewById(R.id.buttonP);
        button4=(Button)findViewById(R.id.button4);
        button5=(Button)findViewById(R.id.button5);
        button6=(Button)findViewById(R.id.button6);
        buttonX=(Button)findViewById(R.id.buttonX);
        button7=(Button)findViewById(R.id.button7);
        button8=(Button)findViewById(R.id.button8);
        button9=(Button)findViewById(R.id.button9);
        buttonD=(Button)findViewById(R.id.buttonD);
        button0=(Button)findViewById(R.id.button0);
        buttonR=(Button)findViewById(R.id.buttonR);
        buttonC=(Button)findViewById(R.id.buttonC);
        buttonM=(Button)findViewById(R.id.buttonM);
        buttonH=(Button)findViewById(R.id.buttonH);

        edit=(EditText)findViewById(R.id.result);

        View.OnClickListener cl = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(v==button1){
                    edit.setText(edit.getText().toString()+1);
                    flag = true;
                }
                else if(v==button2){
                    edit.setText(edit.getText().toString()+2);
                    flag = true;
                }
                else if(v==button3){
                    edit.setText(edit.getText().toString()+3);
                    flag = true;
                }
                else if(v==buttonP){
                    if(flag==false){
                        Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                    }
                    else {
                        num=Integer.valueOf(edit.getText().toString().trim());
                        edit.setText(" ");
                        where = 1;
                        flag = false;
                    }
                }
                else if(v==button4){
                    edit.setText(edit.getText().toString()+4);
                    flag = true;
                }
                else if(v==button5){
                    edit.setText(edit.getText().toString()+5);
                    flag = true;
                }
                else if(v==button6){
                    edit.setText(edit.getText().toString()+6);
                    flag = true;
                }
                else if(v==buttonX){
                    if(flag==false){
                        Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                    }
                    else {
                        num=Integer.valueOf(edit.getText().toString().trim());
                        edit.setText(" ");
                        where = 2;
                        flag = false;
                    }
                }
                else if(v==button7){
                    edit.setText(edit.getText().toString()+7);
                    flag = true;
                }
                else if(v==button8){
                    edit.setText(edit.getText().toString()+8);
                    flag = true;
                }
                else if(v==button9){
                    edit.setText(edit.getText().toString()+9);
                    flag = true;
                }
                else if(v==buttonD){
                    if(flag==false){
                        Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                    }
                    else {
                        num=Integer.valueOf(edit.getText().toString().trim());
                        edit.setText(" ");
                        where = 3;
                        flag = false;
                    }
                }
                else if(v==button0){
                    edit.setText(edit.getText().toString()+0);
                    flag = true;
                }
                else if(v==buttonC){
                    edit.setText(" ");
                }
                else if(v==buttonM){
                    if(flag==false){
                        Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                    }
                    else {
                        num=Integer.valueOf(edit.getText().toString().trim());
                        edit.setText(" ");
                        where = 4;
                        flag = false;
                    }
                }
                else if(v==buttonR) {
                    if (where == 1) {
                        if(flag==true) {
                            num = num + Integer.valueOf(edit.getText().toString().trim());
                            edit.setText(' '+Integer.toString(num));
                            flag = false;
                        }
                        else{
                            Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                        }
                    }
                    else if(where==2){
                        if(flag == true) {
                            num = num * Integer.valueOf(edit.getText().toString().trim());
                            edit.setText(' '+Integer.toString(num));
                            flag = false;
                        }
                        else{
                            Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                        }
                    }
                    else if(where==3){
                        if(flag == true) {
                            num = num / Integer.valueOf(edit.getText().toString().trim());
                            edit.setText(' '+Integer.toString(num));
                            flag = false;
                        }
                        else{
                            Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                        }
                    }
                    else if(where==4){
                        if(flag == true) {
                            num = num - Integer.valueOf(edit.getText().toString().trim());
                            edit.setText(' '+Integer.toString(num));
                            flag = false;
                        }
                        else{
                            Toast.makeText(getApplicationContext(),"Choose Number First",Toast.LENGTH_SHORT).show();
                        }
                    }
                }
                else if(v==buttonH){
                    Toast.makeText(getApplicationContext(),"Made by HyoBin",Toast.LENGTH_LONG).show();
                }
            }

        };
        button1.setOnClickListener(cl);
        button2.setOnClickListener(cl);
        button3.setOnClickListener(cl);
        buttonP.setOnClickListener(cl);
        button4.setOnClickListener(cl);
        button5.setOnClickListener(cl);
        button6.setOnClickListener(cl);
        buttonX.setOnClickListener(cl);
        button7.setOnClickListener(cl);
        button8.setOnClickListener(cl);
        button9.setOnClickListener(cl);
        buttonD.setOnClickListener(cl);
        button0.setOnClickListener(cl);
        buttonR.setOnClickListener(cl);
        buttonC.setOnClickListener(cl);
        buttonM.setOnClickListener(cl);
        buttonH.setOnClickListener(cl);
    }
}
