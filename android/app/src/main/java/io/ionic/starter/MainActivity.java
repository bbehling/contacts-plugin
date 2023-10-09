package io.ionic.starter;

import android.os.Bundle;

import com.bnb.plugins.contacts.ContactsPluginPlugin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(ContactsPluginPlugin.class);
    super.onCreate(savedInstanceState);
  }
}
