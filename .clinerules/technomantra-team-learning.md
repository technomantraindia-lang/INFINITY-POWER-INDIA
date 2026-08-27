# Technomantra Team Learning (V4.8.1)

Use these as proven team references, not as instructions to copy blindly. Current user prompt and current-project conventions always win.

## Pattern 1: Responsive carousel / slider · CSST10I15-CSST10I10.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>DaTo CSST Screw Air Compressor | Datronix Autotech</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="DAS723.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="../index.html" aria-label="Datronix Autotech home">
        <img src="../photos/logo.png" alt="Datronix Autotech">
      </a>

      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" id="main-navigation" aria-label="Main navigation">
        <a href="../index.html">Home</a>
        <a href="../page/about.html">About Us</a>
        <div class="nav-dropdown">
          <button type="button" class="nav-drop-toggle active" aria-expanded="false" aria-haspopup="true" aria-controls="products-submenu">Products</button>
          <div class="dropdown-menu" id="products-submenu" role="menu">
            <a role="menuitem" href="../page/categori.html">All products</a>
            <a role="menuitem" href="DAS528.html">DAS528 DaTo Diagnostic Car Scanner</a>
            <a role="menuitem" href="DAS722.html">DAS722 Da To Diagnostic Car Scanner</a>
            <a role="menuitem" href="DASXG3.html">DAS X-G3 IMMO Programming</a>
            <a role="menuitem" href="DAS701.html">DaTo DAS701 Super Scanner</a>
            <a role="menuitem" href="DAS723.html">DaTo DAS723 PRO ULTRA</a>
            <a role="menuitem" href="DASG3.html">DaTo DASG3 Key Programmer</a>
            <a role="menuitem" href="DAS1026.html">Bluetooth OBD2 Scanner DAS1026</a>
            <a role="menuitem" href="ADAS-RADAR.html">ADAS RADAR Trio Cipher Calibration</a>
            <a role="menuitem" href="DAS825.html">DAS825 PRO MAX</a>
            <a role="menuitem" href="DAS623.html">EV SCANNER DaTo DAS623</a>
            <a role="menuitem" href="DIDS-101.html">DIDS-101 Diesel Injector Testing</a>
            <a role="menuitem" href="ACMAS301%E2%80%93AC.html">ACMAS301 AC Service Station</a>
            <a role="menuitem" href="ACMAS302.html">ACMAS302 AC Service Station</a>
            <a role="menuitem" href="DIGD603.html">DaTo DIGD603 GDI &amp; Piezo Injector Cleaner</a>
            <a role="menuitem" href="PTIW1001.html">DaTo PTIW1001 Air Impact Wrench</a>
            <a role="menuitem" href="PTIW1011.html">DaTo PTIW1011 1&Prime; Heavy Duty Impact Wrench</a>
            <a role="menuitem" href="CSST10I15-CSST10I10.html">DaTo CSST Screw Air Compressor</a>
            <a role="menuitem" href="DHP2050.html">DaTo DHP 2050 Shop Press &ndash; 50 Ton</a>
          </div>
        </div>
        <a href="../page/service.html">Services</a>
        <a href="../page/contact.html">Contact Us</a>
      </
```

## Pattern 2: Responsive carousel / slider · service-detail-bulk.css
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root{--sbs-green-dark:#1b4332;--sbs-green:#2d6a4f;--sbs-green-accent:#52b788;--sbs-green-bright:#7cb518;--sbs-green-pale:#e8f5e9;--sbs-green-soft:#f4f8f2;--sbs-beige:#f7f6f2;--sbs-white:#ffffff;--sbs-gray-100:#f3f5f3;--sbs-gray-400:#9ca3af;--sbs-gray-600:#4b5563;--sbs-gray-800:#1a1f2e;--sbs-font-serif:'Playfair Display',Georgia,serif;--sbs-font-sans:'Poppins',sans-serif;--sbs-pad-x:clamp(24px, 5vw, 80px);--sbs-shadow:0 8px 32px rgba(27, 67, 50, 0.1);--sbs-transition:0.35s cubic-bezier(0.4, 0, 0.2, 1)}body.service-bulk-page{font-family:var(--sbs-font-sans);font-size:calc(14px * var(--type-scale, 1.22));color:var(--sbs-gray-800);line-height:1.65;overflow-x:hidden;background:var(--sbs-white);-webkit-font-smoothing:antialiased}body.service-bulk-page .nav-list a.active{color:#7cb518}body.service-bulk-page .nav-list a.active::after{background:#7cb518}.sbs-sprite{position:absolute;width:0;height:0;overflow:hidden}.sbs-container{width:100%;max-width:100%;margin:0 auto;padding:0 var(--sbs-pad-x)}.sbs-svg-icon{display:block;flex-shrink:0;color:currentColor}.sbs-svg-icon--btn{width:18px;height:18px}.sbs-svg-icon--play{width:20px;height:20px}.sbs-svg-icon--check{width:14px;height:14px;color:var(--sbs-white)}.sbs-svg-icon--pill{width:22px;height:22px;color:var(--sbs-green)}.sbs-svg-icon--step{width:24px;height:24px;color:var(--sbs-green)}.sbs-label-leaf{width:22px;height:22px;object-fit:contain;flex-shrink:0}.sbs-label-leaf--center{display:block;margin:0 auto 10px}.sbs-icon-img{width:28px;height:28px;object-fit:contain;display:block}.sbs-section-label{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sbs-green-bright);margin-bottom:10px}.sbs-section-head{text-align:center;margin-bottom:clamp(28px,4vw,40px)}.sbs-section-head h2{font-family:var(--sbs-font-serif);font-size:clamp(26px, 3vw, 34px);font-weight:700;color:var(--sbs-green-dark);margin:0}.sbs-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;font-size:14px;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:inherit;text-decoration:none;transition:transform var(--sbs-transition),box-shadow var(--sbs-transition),background var(--sbs-transition);white-space:nowrap}.sbs-btn-primary{background:linear-gradient(135deg,#1b4332,#2d6a4f);color:var(--sbs-white)}.sbs-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(27,67,50,.25)}.sbs-btn-video{background:var(--sbs-white);color:var(--sbs-green-dark);border:1.5px solid var(--sbs-green-dark)}.sbs-btn-video:hover{border-color:var(--sbs-green-accent);transform:translateY(-2px)}.sbs-btn-white{background:var(--sbs-white);color:var(--sbs-green-dark)}.sbs-btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.12)}.sbs-btn-outline-white{background:0 0;color:var(--sbs-white);border:1.5px solid rgba(255,255,255,.85)}.sbs-btn-outline-white:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}.sbs-hero{position:relative;overflow:hidden;min-height:clamp(420px,42vw,520px);padding:clamp(120px,14vw,150px) 0 clamp(56px,7vw,72px);background:var(--sbs-white)}.sbs-hero-bg{positi
```

## Pattern 3: Styling / layout system · service-detail-bulk.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root{--sbs-green-dark:#1b4332;--sbs-green:#2d6a4f;--sbs-green-accent:#52b788;--sbs-green-bright:#7cb518;--sbs-green-pale:#e8f5e9;--sbs-green-soft:#f4f8f2;--sbs-beige:#f7f6f2;--sbs-white:#ffffff;--sbs-gray-100:#f3f5f3;--sbs-gray-400:#9ca3af;--sbs-gray-600:#4b5563;--sbs-gray-800:#1a1f2e;--sbs-font-serif:'Playfair Display',Georgia,serif;--sbs-font-sans:'Poppins',sans-serif;--sbs-pad-x:clamp(24px, 5vw, 80px);--sbs-shadow:0 8px 32px rgba(27, 67, 50, 0.1);--sbs-transition:0.35s cubic-bezier(0.4, 0, 0.2, 1)}body.service-bulk-page{font-family:var(--sbs-font-sans);font-size:calc(14px * var(--type-scale, 1.22));color:var(--sbs-gray-800);line-height:1.65;overflow-x:hidden;background:var(--sbs-white);-webkit-font-smoothing:antialiased}body.service-bulk-page .nav-list a.active{color:#7cb518}body.service-bulk-page .nav-list a.active::after{background:#7cb518}.sbs-sprite{position:absolute;width:0;height:0;overflow:hidden}.sbs-container{width:100%;max-width:100%;margin:0 auto;padding:0 var(--sbs-pad-x)}.sbs-svg-icon{display:block;flex-shrink:0;color:currentColor}.sbs-svg-icon--btn{width:18px;height:18px}.sbs-svg-icon--play{width:20px;height:20px}.sbs-svg-icon--check{width:14px;height:14px;color:var(--sbs-white)}.sbs-svg-icon--pill{width:22px;height:22px;color:var(--sbs-green)}.sbs-svg-icon--step{width:24px;height:24px;color:var(--sbs-green)}.sbs-label-leaf{width:22px;height:22px;object-fit:contain;flex-shrink:0}.sbs-label-leaf--center{display:block;margin:0 auto 10px}.sbs-icon-img{width:28px;height:28px;object-fit:contain;display:block}.sbs-section-label{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sbs-green-bright);margin-bottom:10px}.sbs-section-head{text-align:center;margin-bottom:clamp(28px,4vw,40px)}.sbs-section-head h2{font-family:var(--sbs-font-serif);font-size:clamp(26px, 3vw, 34px);font-weight:700;color:var(--sbs-green-dark);margin:0}.sbs-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;font-size:14px;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:inherit;text-decoration:none;transition:transform var(--sbs-transition),box-shadow var(--sbs-transition),background var(--sbs-transition);white-space:nowrap}.sbs-btn-primary{background:linear-gradient(135deg,#1b4332,#2d6a4f);color:var(--sbs-white)}.sbs-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(27,67,50,.25)}.sbs-btn-video{background:var(--sbs-white);color:var(--sbs-green-dark);border:1.5px solid var(--sbs-green-dark)}.sbs-btn-video:hover{border-color:var(--sbs-green-accent);transform:translateY(-2px)}.sbs-btn-white{background:var(--sbs-white);color:var(--sbs-green-dark)}.sbs-btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.12)}.sbs-btn-outline-white{background:0 0;color:var(--sbs-white);border:1.5px solid rgba(255,255,255,.85)}.sbs-btn-outline-white:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}.sbs-hero{position:relative;overflow:hidden;min-height:clamp(420px,42vw,520px);padding:clamp(120px,14vw,150px) 0 clamp(56px,7vw,72px);background:var(--sbs-white)}.sbs-hero-bg{positi
```

## Pattern 4: Styling / layout system · service-detail.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root{--sd-green-dark:#1b4332;--sd-green:#2d6a4f;--sd-green-accent:#52b788;--sd-green-bright:#7cb518;--sd-green-pale:#e8f5e9;--sd-green-soft:#f4f8f2;--sd-white:#ffffff;--sd-gray-100:#f3f5f3;--sd-gray-400:#9ca3af;--sd-gray-600:#4b5563;--sd-gray-800:#1a1f2e;--sd-font-serif:'Playfair Display',Georgia,serif;--sd-font-sans:'Poppins',sans-serif;--sd-pad-x:clamp(24px, 5vw, 80px);--sd-shadow:0 8px 32px rgba(27, 67, 50, 0.1);--sd-transition:0.35s cubic-bezier(0.4, 0, 0.2, 1)}body.service-detail-page{font-family:var(--sd-font-sans);font-size:calc(14px * var(--type-scale, 1.22));color:var(--sd-gray-800);line-height:1.65;overflow-x:hidden;background:var(--sd-white);-webkit-font-smoothing:antialiased}body.service-detail-page .nav-list a.active{color:#7cb518}body.service-detail-page .nav-list a.active::after{background:#7cb518}.sd-sprite{position:absolute;width:0;height:0;overflow:hidden}.sd-container{width:100%;max-width:100%;margin:0 auto;padding:0 var(--sd-pad-x)}.sd-svg-icon{display:block;flex-shrink:0;color:currentColor}.sd-svg-icon--btn{width:18px;height:18px}.sd-svg-icon--play{width:20px;height:20px}.sd-svg-icon--check{width:14px;height:14px;color:var(--sd-white);flex-shrink:0}.sd-svg-icon--benefit{width:22px;height:22px;color:var(--sd-green)}.sd-label-leaf{width:22px;height:22px;object-fit:contain}.sd-label-leaf--center{display:block;margin:0 auto 10px}.sd-icon-img{width:28px;height:28px;object-fit:contain;display:block}.sd-section-label{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sd-green-bright);margin-bottom:10px}.sd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;font-size:14px;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:inherit;text-decoration:none;transition:transform var(--sd-transition),box-shadow var(--sd-transition),background var(--sd-transition);white-space:nowrap}.sd-btn-primary{background:linear-gradient(135deg,#1b4332,#2d6a4f);color:var(--sd-white)}.sd-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(27,67,50,.25)}.sd-btn-video{background:var(--sd-white);color:var(--sd-green-dark);border:1.5px solid var(--sd-green-dark)}.sd-btn-video:hover{border-color:var(--sd-green-accent);transform:translateY(-2px)}.sd-btn-white{background:var(--sd-white);color:var(--sd-green-dark)}.sd-btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.12)}.sd-btn-outline-white{background:0 0;color:var(--sd-white);border:1.5px solid rgba(255,255,255,.85)}.sd-btn-outline-white:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}.sd-hero{position:relative;overflow:hidden;min-height:clamp(420px,42vw,520px);padding:clamp(120px,14vw,150px) 0 clamp(56px,7vw,72px);background:var(--sd-white)}.sd-hero-bg{position:absolute;inset:0;z-index:0;background:url('../images/indor banner section image.png') right center/cover no-repeat;pointer-events:none;transform:scale(1);will-change:transform}.sd-hero-overlay{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,#fff 0,#fff 34%,rgba(255,255,255,.96) 44%,rgba(255,255,255,.8
```