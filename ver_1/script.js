function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./static/0001.png
     ./static/0002.png
     ./static/0003.png
     ./static/0004.png
     ./static/0005.png
     ./static/0006.png
     ./static/0007.png
     ./static/0008.png
     ./static/0009.png
     ./static/0010.png
     ./static/0011.png
     ./static/0012.png
     ./static/0013.png
     ./static/0014.png
     ./static/0015.png
     ./static/0016.png
     ./static/0017.png
     ./static/0018.png
     ./static/0019.png
     ./static/0020.png
     ./static/0021.png
     ./static/0022.png
     ./static/0023.png
     ./static/0024.png
     ./static/0025.png
     ./static/0026.png
     ./static/0027.png
     ./static/0028.png
     ./static/0029.png
     ./static/0030.png
     ./static/0031.png
     ./static/0032.png
     ./static/0033.png
     ./static/0034.png
     ./static/0035.png
     ./static/0036.png
     ./static/0037.png
     ./static/0038.png
     ./static/0039.png
     ./static/0040.png
     ./static/0041.png
     ./static/0042.png
     ./static/0043.png
     ./static/0044.png
     ./static/0045.png
     ./static/0046.png
     ./static/0047.png
     ./static/0048.png
     ./static/0049.png
     ./static/0050.png
     ./static/0051.png
     ./static/0052.png
     ./static/0053.png
     ./static/0054.png
     ./static/0055.png
     ./static/0056.png
     ./static/0057.png
     ./static/0058.png
     ./static/0059.png
     ./static/0060.png
     ./static/0061.png
     ./static/0062.png
     ./static/0063.png
     ./static/0064.png
     ./static/0065.png
     ./static/0066.png
     ./static/0067.png
     ./static/0068.png
     ./static/0069.png
     ./static/0070.png
     ./static/0071.png
     ./static/0072.png
     ./static/0073.png
     ./static/0074.png
     ./static/0075.png
     ./static/0076.png
     ./static/0077.png
     ./static/0078.png
     ./static/0079.png
     ./static/0080.png
     ./static/0081.png
     ./static/0082.png
     ./static/0083.png
     ./static/0084.png
     ./static/0085.png
     ./static/0086.png
     ./static/0087.png
     ./static/0088.png
     ./static/0089.png
     ./static/0090.png
     ./static/0091.png
     ./static/0092.png
     ./static/0093.png
     ./static/0094.png
     ./static/0095.png
     ./static/0096.png
     ./static/0097.png
     ./static/0098.png
     ./static/0099.png
     ./static/0100.png
     ./static/0101.png
     ./static/0102.png
     ./static/0103.png
     ./static/0104.png
     ./static/0105.png
     ./static/0106.png
     ./static/0107.png
     ./static/0108.png
     ./static/0109.png
     ./static/0110.png
     ./static/0111.png
     ./static/0112.png
     ./static/0113.png
     ./static/0114.png
     ./static/0115.png
     ./static/0116.png
     ./static/0117.png
     ./static/0118.png
     ./static/0119.png
     ./static/0120.png
     ./static/0121.png
     ./static/0122.png
     ./static/0123.png
     ./static/0124.png
     ./static/0125.png
     ./static/0126.png
     ./static/0127.png
     ./static/0128.png
     ./static/0129.png
     ./static/0130.png
     ./static/0131.png
     ./static/0132.png
     ./static/0133.png
     ./static/0134.png
     ./static/0135.png
     ./static/0136.png
     ./static/0137.png
     ./static/0138.png
     ./static/0139.png
     ./static/0140.png
     ./static/0141.png
     ./static/0142.png
     ./static/0143.png
     ./static/0144.png
     ./static/0145.png
     ./static/0146.png
     ./static/0147.png
     ./static/0148.png
     ./static/0149.png
     ./static/0150.png
     ./static/0151.png
     ./static/0152.png
     ./static/0153.png
     ./static/0154.png
     ./static/0155.png
     ./static/0156.png
     ./static/0157.png
     ./static/0158.png
     ./static/0159.png
     ./static/0160.png
     ./static/0161.png
     ./static/0162.png
     ./static/0163.png
     ./static/0164.png
     ./static/0165.png
     ./static/0166.png
     ./static/0167.png
     ./static/0168.png
     ./static/0169.png
     ./static/0170.png
     ./static/0171.png
     ./static/0172.png
     ./static/0173.png
     ./static/0174.png
     ./static/0175.png
     ./static/0176.png
     ./static/0177.png
     ./static/0178.png
     ./static/0179.png
     ./static/0180.png
     ./static/0181.png
     ./static/0182.png
     ./static/0183.png
     ./static/0184.png
     ./static/0185.png
     ./static/0186.png
     ./static/0187.png
     ./static/0188.png
     ./static/0189.png
     ./static/0190.png
     ./static/0191.png
     ./static/0192.png
     ./static/0193.png
     ./static/0194.png
     ./static/0195.png
     ./static/0196.png
     ./static/0197.png
     ./static/0198.png
     ./static/0199.png
     ./static/0200.png
     ./static/0201.png
     ./static/0202.png
     ./static/0203.png
     ./static/0204.png
     ./static/0205.png
     ./static/0206.png
     ./static/0207.png
     ./static/0208.png
     ./static/0209.png
     ./static/0210.png
     ./static/0211.png
     ./static/0212.png
     ./static/0213.png
     ./static/0214.png
     ./static/0215.png
     ./static/0216.png
     ./static/0217.png
     ./static/0218.png
     ./static/0219.png
     ./static/0220.png
     ./static/0221.png
     ./static/0222.png
     ./static/0223.png
     ./static/0224.png
     ./static/0225.png
     ./static/0226.png
     ./static/0227.png
     ./static/0228.png
     ./static/0229.png
     ./static/0230.png
     ./static/0231.png
     ./static/0232.png
     ./static/0233.png
     ./static/0222.png
     ./static/0221.png
     ./static/0220.png
     ./static/0219.png
     ./static/0218.png
     ./static/0217.png
     ./static/0216.png
     ./static/0215.png
     ./static/0214.png
     ./static/0213.png
     ./static/0212.png
     ./static/0211.png
     ./static/0210.png
     ./static/0209.png
     ./static/0208.png
     ./static/0207.png
     ./static/0206.png
     ./static/0205.png
     ./static/0204.png
     ./static/0203.png
     ./static/0202.png
     ./static/0201.png
     ./static/0200.png
     ./static/0199.png
     ./static/0198.png
     ./static/0197.png
     ./static/0196.png
     ./static/0195.png
     ./static/0194.png
     ./static/0193.png
     ./static/0192.png
     ./static/0191.png
     ./static/0190.png
     ./static/0189.png
     ./static/0188.png
     ./static/0187.png
     ./static/0186.png
     ./static/0185.png
     ./static/0184.png
     ./static/0183.png
     ./static/0182.png
     ./static/0181.png
     ./static/0180.png
     ./static/0179.png
     ./static/0178.png
     ./static/0177.png
     ./static/0176.png
     ./static/0175.png
     ./static/0174.png
     ./static/0173.png
     ./static/0172.png
     ./static/0171.png
     ./static/0170.png
     ./static/0169.png
     ./static/0168.png
     ./static/0167.png
     ./static/0166.png
     ./static/0165.png
     ./static/0164.png
     ./static/0163.png
     ./static/0162.png
     ./static/0161.png
     ./static/0160.png
     ./static/0159.png
     ./static/0158.png
     ./static/0157.png
     ./static/0156.png
     ./static/0155.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var scaleFactor = 0.5; // Adjust this value to control the scale (e.g., 0.5 for 50% scale)
  var scaledWidth = img.width * scaleFactor;
  var scaledHeight = img.height * scaleFactor;
  var centerShift_x = (canvas.width - scaledWidth) / 2;
  var centerShift_y = (canvas.height - scaledHeight) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    scaledWidth,
    scaledHeight
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})