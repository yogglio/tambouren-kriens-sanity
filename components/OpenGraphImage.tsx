// Renders the Open Graph image used on the home page

export const width = 1200;
export const height = 630;

export function OpenGraphImage(props: { title: string }) {
  const { title } = props;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        backgroundColor: "white",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        backgroundSize: "100px 100px",
        backgroundPosition: "0 -8px, 0 -8px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          height={90}
          viewBox="0 0 1521 141"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ background: "#fff" }}
        >
          <path
            id="plus"
            fill="#000000"
            fillRule="evenodd"
            stroke="none"
            opacity={0.333}
            d="M 729.734009 67.013 L 729.734009 44.893982 L 722.866028 44.893982 L 722.866028 67.013 L 700.848022 67.013 L 700.848022 73.880981 L 722.866028 73.880981 L 722.866028 96 L 729.734009 96 L 729.734009 73.880981 L 751.752014 73.880981 L 751.752014 67.013 Z"
          />
          <g id="next">
            <path
              id="Path"
              fill="#000000"
              stroke="none"
              d="M 421.148651 7.053055 L 531.247559 7.053055 L 531.247559 27.374428 L 487.572479 27.374428 L 487.572479 134.28244 L 465.733337 134.28244 L 465.733337 27.374428 L 421.148651 27.374428 L 421.148651 7.053055 Z"
            />
            <path
              id="path2"
              fill="#000000"
              stroke="none"
              d="M 240.077698 7.053055 L 240.077698 27.374428 L 151.826096 27.374428 L 151.826096 60.065285 L 222.797943 60.065285 L 222.797943 80.386612 L 151.826096 80.386612 L 151.826096 113.961105 L 240.077698 113.961105 L 240.077698 134.28244 L 129.988388 134.28244 L 129.988388 27.374428 L 129.979248 27.374428 L 129.979248 7.053055 L 240.077698 7.053055 Z"
            />
            <path
              id="path3"
              fill="#000000"
              stroke="none"
              d="M 295.053375 7.106125 L 266.474609 7.106125 L 368.837677 134.335541 L 397.499847 134.335541 L 346.31189 70.764587 L 397.41803 7.203186 L 368.837677 7.24736 L 332.003296 52.994392 L 295.053375 7.106125 Z"
            />
            <path
              id="path4"
              fill="#000000"
              stroke="none"
              d="M 324.37973 97.986755 L 310.067871 80.192169 L 266.392792 134.432602 L 295.053375 134.432602 L 324.37973 97.986755 Z"
            />
            <path
              id="path5"
              fill="#000000"
              fillRule="evenodd"
              stroke="none"
              d="M 130.753632 134.28244 L 28.252766 7 L 0.955681 7 L 0.955681 134.22934 L 22.793381 134.22934 L 22.793381 34.195213 L 103.31987 134.28244 L 130.753632 134.28244 Z"
            />
            <path
              id="path6"
              fill="#000000"
              stroke="none"
              d="M 536.156677 133.505325 C 534.55719 133.505325 533.196777 132.951355 532.057739 131.843292 C 530.918701 130.735199 530.355591 129.393707 530.369995 127.804497 C 530.355591 126.258926 530.918701 124.932014 532.057739 123.823936 C 533.196777 122.715866 534.55719 122.161736 536.156677 122.161736 C 537.69519 122.161736 539.041199 122.715866 540.180237 123.823936 C 541.335327 124.932014 541.911255 126.258926 541.927307 127.804497 C 541.911255 128.854172 541.644958 129.816422 541.112366 130.676651 C 540.565247 131.55162 539.870605 132.236984 538.996277 132.732697 C 538.138 133.243027 537.191467 133.505325 536.156677 133.505325 Z"
            />
            <path
              id="path7"
              fill="#000000"
              stroke="none"
              d="M 573.429077 79.907257 L 583.10614 79.907257 L 583.10614 117.189735 C 583.091675 120.616165 582.350464 123.546883 580.901794 126.011055 C 579.437073 128.475082 577.409302 130.355789 574.805542 131.682693 C 572.216248 132.994843 569.182495 133.665741 565.734924 133.665741 C 562.58252 133.665741 559.757324 133.097031 557.241821 131.988953 C 554.726318 130.880859 552.729004 129.218674 551.264221 127.03154 C 549.783508 124.844421 549.05835 122.117943 549.05835 118.851944 L 558.751465 118.851944 C 558.76593 120.280869 559.091553 121.52002 559.712402 122.555267 C 560.333252 123.590515 561.191589 124.377739 562.287292 124.931854 C 563.395874 125.485985 564.669678 125.763046 566.103882 125.763046 C 567.658447 125.763046 568.98999 125.442177 570.069702 124.786026 C 571.149353 124.14447 571.97876 123.18222 572.556335 121.899117 C 573.117798 120.630768 573.414612 119.056 573.429077 117.189735 L 573.429077 79.907257 Z"
            />
            <path
              id="path8"
              fill="#000000"
              stroke="none"
              d="M 622.922913 94.487808 C 622.687073 92.227844 621.650696 90.463608 619.845886 89.209702 C 618.025024 87.941193 615.673096 87.31424 612.786987 87.31424 C 610.760742 87.31424 609.01532 87.620499 607.565063 88.218262 C 606.114746 88.830612 604.990173 89.647034 604.220093 90.682281 C 603.45166 91.717522 603.06665 92.898605 603.036194 94.22551 C 603.036194 95.333588 603.30249 96.295837 603.820618 97.097824 C 604.338806 97.914246 605.033508 98.599594 605.936707 99.153709 C 606.823853 99.722275 607.815308 100.188797 608.896606 100.567886 C 609.990723 100.946983 611.086426 101.267838 612.180603 101.530304 L 617.226074 102.769608 C 619.253845 103.236137 621.222351 103.863251 623.100952 104.665077 C 624.979553 105.452454 626.681702 106.458504 628.175293 107.668625 C 629.670532 108.878891 630.854492 110.336868 631.727173 112.04287 C 632.599915 113.748703 633.044312 115.746193 633.044312 118.049957 C 633.044312 121.155533 632.245422 123.882172 630.63147 126.244164 C 629.019165 128.591553 626.696167 130.428772 623.64801 131.755692 C 620.614319 133.067993 616.945313 133.738586 612.625 133.738586 C 608.452209 133.738586 604.812134 133.097183 601.749512 131.814087 C 598.672485 130.545563 596.274048 128.679138 594.543091 126.229561 C 592.812012 123.780144 591.879944 120.791031 591.746765 117.277161 L 601.335571 117.277161 C 601.46875 119.114235 602.060791 120.64537 603.06665 121.884674 C 604.086975 123.109383 605.418518 124.013412 607.046875 124.625763 C 608.689636 125.223511 610.523376 125.529778 612.551208 125.529778 C 614.667236 125.529778 616.531433 125.208916 618.143738 124.581955 C 619.741577 123.955017 620.999329 123.080353 621.902527 121.943069 C 622.820251 120.820236 623.278992 119.493484 623.293457 117.977119 C 623.278992 116.591972 622.863525 115.439941 622.064575 114.535927 C 621.251221 113.632072 620.126587 112.873886 618.690796 112.261528 C 617.242065 111.649178 615.554382 111.095047 613.630859 110.61393 L 607.505676 109.068359 C 603.081055 107.945679 599.574097 106.239838 597.013611 103.950684 C 594.44043 101.66153 593.166565 98.628792 593.166565 94.823257 C 593.166565 91.703087 594.024902 88.962006 595.757507 86.614449 C 597.472473 84.267059 599.825989 82.444427 602.800354 81.146729 C 605.789063 79.834579 609.162964 79.192863 612.920166 79.192863 C 616.738342 79.192863 620.081726 79.834579 622.967773 81.146729 C 625.852295 82.444427 628.117554 84.252464 629.758728 86.556053 C 631.40155 88.85981 632.259827 91.498856 632.304749 94.487808 L 622.922913 94.487808 Z"
            />
          </g>
          <g id="sanity">
            <path
              id="path9"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 1341.333984 50.482063 L 1341.333984 138.686707 L 1312.342896 138.686707 L 1312.342896 65.540962 L 1341.333984 50.482063 Z"
            />
            <path
              id="path10"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 953.346375 140.905014 L 1021.094849 105.481987 L 1012.742981 83.848083 L 968.140259 104.648087 L 953.346375 140.905014 Z"
            />
            <path
              id="path11"
              fill="#000000"
              stroke="none"
              opacity="0.5"
              d="M 1312.342896 65.465698 L 1385.842529 27.852638 L 1373.424194 6.851486 L 1312.342896 36.701447 L 1312.342896 65.465698 Z"
            />
            <path
              id="path12"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 1105.342285 43.497108 L 1105.342285 138.686707 L 1077.696167 138.686707 L 1077.696167 3.122971 L 1105.342285 43.497108 Z"
            />
            <path
              id="path13"
              fill="#000000"
              stroke="none"
              opacity="0.5"
              d="M 995.236572 38.235001 L 953.346375 140.905014 L 931.800659 122.357895 L 981.713867 3.122971 L 995.236572 38.235001 Z"
            />
            <path
              id="path14"
              fill="#000000"
              stroke="none"
              d="M 981.713867 3.122971 L 1010.272461 3.122971 L 1063.092163 138.686707 L 1033.860229 138.686707 L 981.713867 3.122971 Z"
            />
            <path
              id="path15"
              fill="#000000"
              stroke="none"
              d="M 1109.618164 3.122971 L 1170.50769 95.740265 L 1170.50769 138.686707 L 1077.696167 3.122971 L 1109.618164 3.122971 Z"
            />
            <path
              id="path16"
              fill="#000000"
              stroke="none"
              d="M 1251.428955 3.122971 L 1222.653442 3.122971 L 1222.653442 138.710434 L 1251.428955 138.710434 L 1251.428955 3.122971 Z"
            />
            <path
              id="path17"
              fill="#000000"
              stroke="none"
              d="M 1312.342896 27.852432 L 1268.050659 27.852432 L 1268.050659 3.122971 L 1371.214722 3.122971 L 1385.842529 27.852432 L 1341.333984 27.852432 L 1312.342896 27.852432 Z"
            />
            <path
              id="path18"
              fill="#000000"
              stroke="none"
              opacity="0.5"
              d="M 1470.799072 87.246033 L 1470.799072 138.686707 L 1442.239746 138.686707 L 1442.239746 87.246033"
            />
            <path
              id="path19"
              fill="#000000"
              stroke="none"
              d="M 1442.239746 87.245361 L 1490.565918 3.122971 L 1520.904785 3.122971 L 1470.799072 87.245361 L 1442.239746 87.245361 Z"
            />
            <path
              id="path20"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 1442.240479 87.245361 L 1392.567871 3.122971 L 1423.817383 3.122971 L 1457.468872 60.769974 L 1442.240479 87.245361 Z"
            />
            <path
              id="path21"
              fill="#000000"
              stroke="none"
              d="M 824.601746 18.768028 C 824.601746 37.645447 836.467468 48.877594 860.222778 54.800377 L 885.395203 60.534393 C 907.877258 65.607422 921.568787 78.208076 921.568787 98.737549 C 921.743713 107.681297 918.783691 116.41214 913.18573 123.467049 C 913.18573 102.985031 902.401306 91.917908 876.387939 85.263687 L 851.671814 79.742332 C 831.879639 75.305702 816.60321 64.947052 816.60321 42.648026 C 816.499146 34.036766 819.312927 25.635956 824.601746 18.768028"
            />
            <path
              id="path22"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 1170.50769 88.779617 L 1170.50769 3.122971 L 1198.153809 3.122971 L 1198.153809 138.686707 L 1170.50769 138.686707 L 1170.50769 88.779617 Z"
            />
            <path
              id="path23"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 897.717285 93.711128 C 908.453552 100.459595 913.161316 109.898239 913.161316 123.443336 C 904.274536 134.627731 888.661682 140.905014 870.310669 140.905014 C 839.42157 140.905014 817.803894 125.968071 813 100.011459 L 842.664185 100.011459 C 846.483215 111.92807 856.59552 117.449425 870.094482 117.449425 C 886.572205 117.449425 897.524719 108.812805 897.740967 93.663673"
            />
            <path
              id="path24"
              fill="#000000"
              stroke="none"
              opacity="0.7"
              d="M 840.021484 46.753647 C 835.118652 43.891151 831.096252 39.777924 828.381226 34.850601 C 825.66626 29.923286 824.359863 24.365723 824.600891 18.767822 C 833.175842 7.677322 848.092041 0.905014 866.274841 0.905014 C 897.740295 0.905014 915.947083 17.234001 920.438599 40.217323 L 891.903687 40.217323 C 888.757263 31.15609 880.878601 24.100716 866.515015 24.100716 C 851.166565 24.100716 840.694031 32.878677 840.093506 46.753647"
            />
          </g>
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontStyle: "normal",
          color: "black",
          marginTop: 0,
          lineHeight: 1.8,
          whiteSpace: "pre-wrap",
        }}
      >
        <b style={{ background: "#fff" }}>{title}</b>
      </div>
      <div
        style={{
          display: "flex",
        }}
      />
    </div>
  );
}
