use tauri::{
  plugin::{Builder, TauriPlugin},
  Manager, Runtime,
};

pub use models::*;

#[cfg(desktop)]
mod desktop;
#[cfg(mobile)]
mod mobile;

mod commands;
mod error;
mod models;

pub use error::{Error, Result};

#[cfg(desktop)]
use desktop::Rtc;
#[cfg(mobile)]
use mobile::Rtc;

/// Extensions to [`tauri::App`], [`tauri::AppHandle`] and [`tauri::Window`] to access the rtc APIs.
pub trait RtcExt<R: Runtime> {
  fn rtc(&self) -> &Rtc<R>;
}

impl<R: Runtime, T: Manager<R>> crate::RtcExt<R> for T {
  fn rtc(&self) -> &Rtc<R> {
    self.state::<Rtc<R>>().inner()
  }
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("rtc")
    .invoke_handler(tauri::generate_handler![commands::ping])
    .setup(|app, api| {
      #[cfg(mobile)]
      let rtc = mobile::init(app, api)?;
      #[cfg(desktop)]
      let rtc = desktop::init(app, api)?;
      app.manage(rtc);
      Ok(())
    })
    .build()
}
