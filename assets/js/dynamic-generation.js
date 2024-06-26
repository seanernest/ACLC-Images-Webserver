const imageFolder = "assets/images/"; // Path to the image folder (optional if image paths are absolute)
const targetContainer = document.getElementById("portfolio-container"); // ID of the container where you want to insert the snippets

const createSnippet = (imagePath) => {
  return `
    <div class="nk-isotope-item" data-filter="Photography">
      <div class="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
        <a href="${imageFolder + imagePath}" class="nk-portfolio-item-link nk-gallery-item" data-size="1500x1500"></a>
        <div class="nk-portfolio-item-image">
          <div style="background-image: url('${imageFolder + imagePath}');"></div>
        </div>
        <div class="nk-portfolio-item-info nk-portfolio-item-info-center text-center bg-main-9">
          <div>
            <div class="portfolio-item-icon"><span class="pe-7s-look"></span></div>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Pre-defined image list (replace with your actual file names)
const imageList = [
"DSCF91.jpg",
"DSCF92.jpg",
"DSCF93.jpg",
"DSCF94.jpg",
"DSCF95.jpg",
"DSCF96.jpg",
"DSCF97.jpg",
"DSCF98.jpg",
"DSCF99.jpg",
"DSCF910.jpg",
"DSCF911.jpg",
"DSCF912.jpg",
"DSCF913.jpg",
"DSCF914.jpg",
"DSCF915.jpg",
"DSCF916.jpg",
"DSCF917.jpg",
"DSCF918.jpg",
"DSCF919.jpg",
"DSCF920.jpg",
"DSCF921.jpg",
"DSCF922.jpg",
"DSCF923.jpg",
"DSCF924.jpg",
"DSCF925.jpg",
"DSCF926.jpg",
"DSCF927.jpg",
"DSCF928.jpg",
"DSCF929.jpg",
"DSCF930.jpg",
"DSCF931.jpg",
"DSCF932.jpg",
"DSCF933.jpg",
"DSCF934.jpg",
"DSCF935.jpg",
"DSCF936.jpg",
"DSCF937.jpg",
"DSCF938.jpg",
"DSCF939.jpg",
"DSCF940.jpg",
"DSCF941.jpg",
"DSCF942.jpg",
"DSCF943.jpg",
"DSCF944.jpg",
"DSCF945.jpg",
"DSCF946.jpg",
"DSCF947.jpg",
"DSCF948.jpg",
"DSCF949.jpg",
"DSCF950.jpg",
"DSCF951.jpg",
"DSCF952.jpg",
"DSCF953.jpg",
"DSCF954.jpg",
"DSCF955.jpg",
"DSCF956.jpg",
"DSCF957.jpg",
"DSCF958.jpg",
"DSCF959.jpg",
"DSCF960.jpg",
"DSCF961.jpg",
"DSCF962.jpg",
"DSCF963.jpg",
"DSCF964.jpg",
"DSCF965.jpg",
"DSCF966.jpg",
"DSCF967.jpg",
"DSCF968.jpg",
"DSCF969.jpg",
"DSCF970.jpg",
"DSCF971.jpg",
"DSCF972.jpg",
"DSCF973.jpg",
"DSCF974.jpg",
"DSCF975.jpg",
"DSCF976.jpg",
"DSCF977.jpg",
"DSCF978.jpg",
"DSCF979.jpg",
"DSCF980.jpg",
"DSCF981.jpg",
"DSCF982.jpg",
"DSCF983.jpg",
"DSCF984.jpg",
"DSCF985.jpg",
"DSCF986.jpg",
"DSCF987.jpg",
"DSCF988.jpg",
"DSCF989.jpg",
"DSCF990.jpg",
"DSCF991.jpg",
"DSCF992.jpg",
"DSCF993.jpg",
"DSCF994.jpg",
"DSCF995.jpg",
"DSCF996.jpg",
"DSCF997.jpg",
"DSCF998.jpg",
"DSCF999.jpg",
"DSCF9100.jpg",
"DSCF9101.jpg",
"DSCF9102.jpg",
"DSCF9103.jpg",
"DSCF9104.jpg",
"DSCF9105.jpg",
"DSCF9106.jpg",
"DSCF9107.jpg",
"DSCF9108.jpg",
"DSCF9109.jpg",
"DSCF9110.jpg",
"DSCF9111.jpg",
"DSCF9112.jpg",
"DSCF9113.jpg",
"DSCF9114.jpg",
"DSCF9115.jpg",
"DSCF9116.jpg",
"DSCF9117.jpg",
"DSCF9118.jpg",
"DSCF9119.jpg",
"DSCF9120.jpg",
"DSCF9121.jpg",
"DSCF9122.jpg",
"DSCF9123.jpg",
"DSCF9124.jpg",
"DSCF9125.jpg",
"DSCF9126.jpg",
"DSCF9127.jpg",
"DSCF9128.jpg",
"DSCF9129.jpg",
"DSCF9130.jpg",
"DSCF9131.jpg",
"DSCF9132.jpg",
"DSCF9133.jpg",
"DSCF9134.jpg",
"DSCF9135.jpg",
"DSCF9136.jpg",
"DSCF9137.jpg",
"DSCF9138.jpg",
"DSCF9139.jpg",
"DSCF9140.jpg",
"DSCF9141.jpg",
"DSCF9142.jpg",
"DSCF9143.jpg",
"DSCF9144.jpg",
"DSCF9145.jpg",
"DSCF9146.jpg",
"DSCF9147.jpg",
"DSCF9148.jpg",
"DSCF9149.jpg",
"DSCF9150.jpg",
"DSCF9151.jpg",
"DSCF9152.jpg",
"DSCF9153.jpg",
"DSCF9154.jpg",
"DSCF9155.jpg",
"DSCF9156.jpg",
"DSCF9157.jpg",
"DSCF9158.jpg",
"DSCF9159.jpg",
"DSCF9160.jpg",
"DSCF9161.jpg",
"DSCF9162.jpg",
"DSCF9163.jpg",
"DSCF9164.jpg",
"DSCF9165.jpg",
"DSCF9166.jpg",
"DSCF9167.jpg",
"DSCF9168.jpg",
"DSCF9169.jpg",
"DSCF9170.jpg",
"DSCF9171.jpg",
"DSCF9172.jpg",
"DSCF9173.jpg",
"DSCF9174.jpg",
"DSCF9175.jpg",
"DSCF9176.jpg",
"DSCF9177.jpg",
"DSCF9178.jpg",
"DSCF9179.jpg",
"DSCF9180.jpg",
"DSCF9181.jpg",
"DSCF9182.jpg",
"DSCF9183.jpg",
"DSCF9184.jpg",
"DSCF9185.jpg",
"DSCF9186.jpg",
"DSCF9187.jpg",
"DSCF9188.jpg",
"DSCF9189.jpg",
"DSCF9190.jpg",
"DSCF9191.jpg",
"DSCF9192.jpg",
"DSCF9193.jpg",
"DSCF9194.jpg",
"DSCF9195.jpg",
"DSCF9196.jpg",
"DSCF9197.jpg",
"DSCF9198.jpg",
"DSCF9199.jpg",
"DSCF9200.jpg",
"DSCF9201.jpg",
"DSCF9202.jpg",
"DSCF9203.jpg",
"DSCF9204.jpg",
"DSCF9205.jpg",
"DSCF9206.jpg",
"DSCF9207.jpg",
"DSCF9208.jpg",
"DSCF9209.jpg",
"DSCF9210.jpg",
"DSCF9211.jpg",
"DSCF9212.jpg",
"DSCF9213.jpg",
"DSCF9214.jpg",
"DSCF9215.jpg",
"DSCF9216.jpg",
"DSCF9217.jpg",
"DSCF9218.jpg",
"DSCF9219.jpg",
"DSCF9220.jpg",
"DSCF9221.jpg",
"DSCF9222.jpg",
"DSCF9223.jpg",
"DSCF9224.jpg",
"DSCF9225.jpg",
"DSCF9226.jpg",
"DSCF9227.jpg",
"DSCF9228.jpg",
"DSCF9229.jpg",
"DSCF9230.jpg",
"DSCF9231.jpg",
"DSCF9232.jpg",
"DSCF9233.jpg",
"DSCF9234.jpg",
"DSCF9235.jpg",
"DSCF9236.jpg",
"DSCF9237.jpg",
"DSCF9238.jpg",
"DSCF9239.jpg",
"DSCF9240.jpg",
"DSCF9241.jpg",
"DSCF9242.jpg",
"DSCF9243.jpg",
"DSCF9244.jpg",
"DSCF9245.jpg",
"DSCF9246.jpg",
"DSCF9247.jpg",
"DSCF9248.jpg",
"DSCF9249.jpg",
"DSCF9250.jpg",
"DSCF9251.jpg",
"DSCF9252.jpg",
"DSCF9253.jpg",
"DSCF9254.jpg",
"DSCF9255.jpg",
"DSCF9256.jpg",
"DSCF9257.jpg",
"DSCF9258.jpg",
"DSCF9259.jpg",
"DSCF9260.jpg",
"DSCF9261.jpg",
"DSCF9262.jpg",
"DSCF9263.jpg",
"DSCF9264.jpg",
"DSCF9265.jpg",
"DSCF9266.jpg",
"DSCF9267.jpg",
"DSCF9268.jpg",
"DSCF9269.jpg",
"DSCF9270.jpg",
"DSCF9271.jpg",
"DSCF9272.jpg",
"DSCF9273.jpg",
"DSCF9274.jpg",
"DSCF9275.jpg",
"DSCF9276.jpg",
"DSCF9277.jpg",
"DSCF9278.jpg",
"DSCF9279.jpg",
"DSCF9280.jpg",
"DSCF9281.jpg",
"DSCF9282.jpg",
"DSCF9283.jpg",
"DSCF9284.jpg",
"DSCF9285.jpg",
"DSCF9286.jpg",
"DSCF9287.jpg",
"DSCF9288.jpg",
"DSCF9289.jpg",
"DSCF9290.jpg",
"DSCF9291.jpg",
"DSCF9292.jpg",
"DSCF9293.jpg",
"DSCF9294.jpg",
"DSCF9295.jpg",
"DSCF9296.jpg",
"DSCF9297.jpg",
"DSCF9298.jpg",
"DSCF9299.jpg",
"DSCF9300.jpg",
"DSCF9301.jpg",
"DSCF9302.jpg",
"DSCF9303.jpg",
"DSCF9304.jpg",
"DSCF9305.jpg",
"DSCF9306.jpg",
"DSCF9307.jpg",
"DSCF9308.jpg",
"DSCF9309.jpg",
"DSCF9310.jpg",
"DSCF9311.jpg",
"DSCF9312.jpg",
"DSCF9313.jpg",
"DSCF9314.jpg",
"DSCF9315.jpg",
"DSCF9316.jpg",
"DSCF9317.jpg",
"DSCF9318.jpg",
"DSCF9319.jpg",
"DSCF9320.jpg",
"DSCF9321.jpg",
"DSCF9322.jpg",
"DSCF9323.jpg",
"DSCF9324.jpg",
"DSCF9325.jpg",
"DSCF9326.jpg",
"DSCF9327.jpg",
"DSCF9328.jpg",
"DSCF9329.jpg",
"DSCF9330.jpg",
"DSCF9331.jpg",
"DSCF9332.jpg",
"DSCF9333.jpg",
"DSCF9334.jpg",
"DSCF9335.jpg",
"DSCF9336.jpg",
"DSCF9337.jpg",
"DSCF9338.jpg",
"DSCF9339.jpg",
"DSCF9340.jpg",
"DSCF9341.jpg",
"DSCF9342.jpg",
"DSCF9343.jpg",
"DSCF9344.jpg",
"DSCF9345.jpg",
"DSCF9346.jpg",
"DSCF9347.jpg",
"DSCF9348.jpg",
"DSCF9349.jpg",
"DSCF9350.jpg",
"DSCF9351.jpg",
"DSCF9352.jpg",
"DSCF9353.jpg",
"DSCF9354.jpg",
"DSCF9355.jpg",
"DSCF9356.jpg",
"DSCF9357.jpg",
"DSCF9358.jpg",
"DSCF9359.jpg",
"DSCF9360.jpg",
"DSCF9361.jpg",
"DSCF9362.jpg",
"DSCF9363.jpg",
"DSCF9364.jpg",
"DSCF9365.jpg",
"DSCF9366.jpg",
"DSCF9367.jpg",
"DSCF9368.jpg",
"DSCF9369.jpg",
"DSCF9370.jpg",
"DSCF9371.jpg",
"DSCF9372.jpg",
"DSCF9373.jpg",
"DSCF9374.jpg",
"DSCF9375.jpg",
"DSCF9376.jpg",
"DSCF9377.jpg",
"DSCF9378.jpg",
"DSCF9379.jpg",
"DSCF9380.jpg",
"DSCF9381.jpg",
"DSCF9382.jpg",
"DSCF9383.jpg",
"DSCF9384.jpg",
"DSCF9385.jpg",
"DSCF9386.jpg",
"DSCF9387.jpg",
"DSCF9388.jpg",
"DSCF9389.jpg",
"DSCF9390.jpg",
"DSCF9391.jpg",
"DSCF9392.jpg",
"DSCF9393.jpg",
"DSCF9394.jpg",
"DSCF9395.jpg",
"DSCF9396.jpg",
"DSCF9397.jpg",
"DSCF9398.jpg",
"DSCF9399.jpg",
"DSCF9400.jpg",
"DSCF9401.jpg",
"DSCF9402.jpg",
"DSCF9403.jpg",
"DSCF9404.jpg",
"DSCF9405.jpg",
"DSCF9406.jpg",
"DSCF9407.jpg",
"DSCF9408.jpg",
"DSCF9409.jpg",
"DSCF9410.jpg",
"DSCF9411.jpg",
"DSCF9412.jpg",
"DSCF9413.jpg",
"DSCF9414.jpg",
"DSCF9415.jpg",
"DSCF9416.jpg",
"DSCF9417.jpg",
"DSCF9418.jpg",
"DSCF9419.jpg",
"DSCF9420.jpg",
"DSCF9421.jpg",
"DSCF9422.jpg",
"DSCF9423.jpg",
"DSCF9424.jpg",
"DSCF9425.jpg",
"DSCF9426.jpg",
"DSCF9427.jpg",
"DSCF9428.jpg",
"DSCF9429.jpg",
"DSCF9430.jpg",
"DSCF9431.jpg",
"DSCF9432.jpg",
"DSCF9433.jpg",
"DSCF9434.jpg",
"DSCF9435.jpg",
"DSCF9436.jpg",
"DSCF9437.jpg",
"DSCF9438.jpg",
"DSCF9439.jpg",
"DSCF9440.jpg",
"DSCF9441.jpg",
"DSCF9442.jpg",
"DSCF9443.jpg",
"DSCF9444.jpg",
"DSCF9445.jpg",
"DSCF9446.jpg",
"DSCF9447.jpg",
"DSCF9448.jpg",
"DSCF9449.jpg",
"DSCF9450.jpg",
"DSCF9451.jpg",
"DSCF9452.jpg",
"DSCF9453.jpg",
"DSCF9454.jpg",
"DSCF9455.jpg",
"DSCF9456.jpg",
"DSCF9457.jpg",
"DSCF9458.jpg",
"DSCF9459.jpg",
"DSCF9460.jpg",
"DSCF9461.jpg",
"DSCF9462.jpg",
"DSCF9463.jpg",
"DSCF9464.jpg",
"DSCF9465.jpg",
"DSCF9466.jpg",
"DSCF9467.jpg",
"DSCF9468.jpg",
"DSCF9469.jpg",
"DSCF9470.jpg",
"DSCF9471.jpg",
"DSCF9472.jpg",
"DSCF9473.jpg",
"DSCF9474.jpg",
"DSCF9475.jpg",
"DSCF9476.jpg",
"DSCF9477.jpg",
"DSCF9478.jpg",
"DSCF9479.jpg",
"DSCF9480.jpg",
"DSCF9481.jpg",
"DSCF9482.jpg",
"DSCF9483.jpg",
"DSCF9484.jpg",
"DSCF9485.jpg",
"DSCF9486.jpg",
"DSCF9487.jpg",
"DSCF9488.jpg",
"DSCF9489.jpg",
"DSCF9490.jpg",
"DSCF9491.jpg",
"DSCF9492.jpg",
"DSCF9493.jpg",
"DSCF9494.jpg",
"DSCF9495.jpg",
"DSCF9496.jpg",
"DSCF9497.jpg",
"DSCF9498.jpg",
"DSCF9499.jpg",
"DSCF9500.jpg",
"DSCF9501.jpg",
"DSCF9502.jpg",
"DSCF9503.jpg",
"DSCF9504.jpg",
"DSCF9505.jpg",
"DSCF9506.jpg",
"DSCF9507.jpg",
"DSCF9508.jpg",
"DSCF9509.jpg",
"DSCF9510.jpg",
"DSCF9511.jpg",
"DSCF9512.jpg",
"DSCF9513.jpg",
"DSCF9514.jpg",
"DSCF9515.jpg",
"DSCF9516.jpg",
"DSCF9517.jpg",
"DSCF9518.jpg",
"DSCF9519.jpg",
"DSCF9520.jpg",
"DSCF9521.jpg",
"DSCF9522.jpg",
"DSCF9523.jpg",
"DSCF9524.jpg",
"DSCF9525.jpg",
"DSCF9526.jpg",
"DSCF9527.jpg",
"DSCF9528.jpg",
"DSCF9529.jpg",
"DSCF9530.jpg",
"DSCF9531.jpg",
"DSCF9532.jpg",
"DSCF9533.jpg",
"DSCF9534.jpg",
"DSCF9535.jpg",
"DSCF9536.jpg",
"DSCF9537.jpg",
"DSCF9538.jpg",
"DSCF9539.jpg",
"DSCF9540.jpg",
"DSCF9541.jpg",
"DSCF9542.jpg",
"DSCF9543.jpg",
"DSCF9544.jpg",
"DSCF9545.jpg",
"DSCF9546.jpg",
"DSCF9547.jpg",
"DSCF9548.jpg",
"DSCF9549.jpg",
"DSCF9550.jpg",
"DSCF9551.jpg",
"DSCF9552.jpg",
"DSCF9553.jpg",
"DSCF9554.jpg",
"DSCF9555.jpg",
"DSCF9556.jpg",
"DSCF9557.jpg",
"DSCF9558.jpg",
"DSCF9559.jpg",
"DSCF9560.jpg",
"DSCF9561.jpg",
"DSCF9562.jpg",
"DSCF9563.jpg",
"DSCF9564.jpg",
"DSCF9565.jpg",
"DSCF9566.jpg",
"DSCF9567.jpg",
"DSCF9568.jpg",
"DSCF9569.jpg",
"DSCF9570.jpg",
"DSCF9571.jpg",
"DSCF9572.jpg",
"DSCF9573.jpg",
"DSCF9574.jpg",
"DSCF9575.jpg",
"DSCF9576.jpg",
"DSCF9577.jpg",
"DSCF9578.jpg",
"DSCF9579.jpg",
"DSCF9580.jpg",
"DSCF9581.jpg",
"DSCF9582.jpg",
"DSCF9583.jpg",
"DSCF9584.jpg",
"DSCF9585.jpg",
"DSCF9586.jpg",
"DSCF9587.jpg",
"DSCF9588.jpg",
"DSCF9589.jpg",
"DSCF9590.jpg",
"DSCF9591.jpg",
"DSCF9592.jpg",
"DSCF9593.jpg",
"DSCF9594.jpg",
"DSCF9595.jpg",
"DSCF9596.jpg",
"DSCF9597.jpg",
"DSCF9598.jpg",
"DSCF9599.jpg",
"DSCF9600.jpg",
"DSCF9601.jpg",
"DSCF9602.jpg",
"DSCF9603.jpg",
"DSCF9604.jpg",
"DSCF9605.jpg",
"DSCF9606.jpg",
"DSCF9607.jpg",
"DSCF9608.jpg",
"DSCF9609.jpg",
"DSCF9610.jpg",
"DSCF9611.jpg",
"DSCF9612.jpg",
"DSCF9613.jpg",
"DSCF9614.jpg",
"DSCF9615.jpg",
"DSCF9616.jpg",
"DSCF9617.jpg",
"DSCF9618.jpg",
"DSCF9619.jpg",
"DSCF9620.jpg",
"DSCF9621.jpg",
"DSCF9622.jpg",
"DSCF9623.jpg",
"DSCF9624.jpg",
"DSCF9625.jpg",
"DSCF9626.jpg",
"DSCF9627.jpg",
"DSCF9628.jpg",
"DSCF9629.jpg",
"DSCF9630.jpg",
"DSCF9631.jpg",
"DSCF9632.jpg",
"DSCF9633.jpg",
"DSCF9634.jpg",
"DSCF9635.jpg",
"DSCF9636.jpg",
"DSCF9637.jpg",
"DSCF9638.jpg",
"DSCF9639.jpg",
"DSCF9640.jpg",
"DSCF9641.jpg",
"DSCF9642.jpg",
"DSCF9643.jpg",
"DSCF9644.jpg",
"DSCF9645.jpg",
"DSCF9646.jpg",
"DSCF9647.jpg",
"DSCF9648.jpg",
"DSCF9649.jpg",
"DSCF9650.jpg",
"DSCF9651.jpg",
"DSCF9652.jpg",
"DSCF9653.jpg",
"DSCF9654.jpg",
"DSCF9655.jpg",
"DSCF9656.jpg",
"DSCF9657.jpg",
"DSCF9658.jpg",
"DSCF9659.jpg",
"DSCF9660.jpg",
"DSCF9661.jpg",
"DSCF9662.jpg",
"DSCF9663.jpg",
"DSCF9664.jpg",
"DSCF9665.jpg",
"DSCF9666.jpg",
"DSCF9667.jpg",
"DSCF9668.jpg",
"DSCF9669.jpg",
"DSCF9670.jpg",
"DSCF9671.jpg",
"DSCF9672.jpg",
"DSCF9673.jpg",
"DSCF9674.jpg",
"DSCF9675.jpg",
"DSCF9676.jpg",
"DSCF9677.jpg",
"DSCF9678.jpg",
"DSCF9679.jpg",
"DSCF9680.jpg",
"DSCF9681.jpg",
"DSCF9682.jpg",
"DSCF9683.jpg",
"DSCF9684.jpg",
"DSCF9685.jpg",
"DSCF9686.jpg",
"DSCF9687.jpg",
"DSCF9688.jpg",
"DSCF9689.jpg",
"DSCF9690.jpg",
"DSCF9691.jpg",
"DSCF9692.jpg",
"DSCF9693.jpg",
"DSCF9694.jpg",
"DSCF9695.jpg",
"DSCF9696.jpg",
"DSCF9697.jpg",
"DSCF9698.jpg",
"DSCF9699.jpg",
"DSCF9700.jpg",
"DSCF9701.jpg",
"DSCF9702.jpg",
"DSCF9703.jpg",
"DSCF9704.jpg",
"DSCF9705.jpg",
"DSCF9706.jpg",
"DSCF9707.jpg",
"DSCF9708.jpg",
"DSCF9709.jpg",
"DSCF9710.jpg",
"DSCF9711.jpg",
"DSCF9712.jpg",
"DSCF9713.jpg",
"DSCF9714.jpg",
"DSCF9715.jpg",
"DSCF9716.jpg",
"DSCF9717.jpg",
"DSCF9718.jpg",
"DSCF9719.jpg",
"DSCF9720.jpg",
"DSCF9721.jpg",
"DSCF9722.jpg",
"DSCF9723.jpg",
"DSCF9724.jpg",
"DSCF9725.jpg",
"DSCF9726.jpg",
"DSCF9727.jpg",
"DSCF9728.jpg",
"DSCF9729.jpg",
"DSCF9730.jpg",
"DSCF9731.jpg",
"DSCF9732.jpg",
"DSCF9733.jpg",
"DSCF9734.jpg",
"DSCF9735.jpg",
"DSCF9736.jpg",
"DSCF9737.jpg",
"DSCF9738.jpg",
"DSCF9739.jpg",
"DSCF9740.jpg",
"DSCF9741.jpg",
"DSCF9742.jpg",
"DSCF9743.jpg",
"DSCF9744.jpg",
"DSCF9745.jpg",
"DSCF9746.jpg",
"DSCF9747.jpg",
"DSCF9748.jpg",
"DSCF9749.jpg",
"DSCF9750.jpg",
"DSCF9751.jpg",
"DSCF9752.jpg",
"DSCF9753.jpg",
"DSCF9754.jpg",
"DSCF9755.jpg",
"DSCF9756.jpg",
"DSCF9757.jpg",
"DSCF9758.jpg",
"DSCF9759.jpg",
"DSCF9760.jpg",
"DSCF9761.jpg",
"DSCF9762.jpg",
"DSCF9763.jpg",
"DSCF9764.jpg",
"DSCF9765.jpg",
"DSCF9766.jpg",
"DSCF9767.jpg",
"DSCF9768.jpg",
"DSCF9769.jpg",
"DSCF9770.jpg",
"DSCF9771.jpg",
"DSCF9772.jpg",
"DSCF9773.jpg",
"DSCF9774.jpg",
"DSCF9775.jpg",
"DSCF9776.jpg",
"DSCF9777.jpg",
"DSCF9778.jpg",
"DSCF9779.jpg",
"DSCF9780.jpg",
"DSCF9781.jpg",
"DSCF9782.jpg",
"DSCF9783.jpg",
"DSCF9784.jpg",
"DSCF9785.jpg",
"DSCF9786.jpg",
"DSCF9787.jpg",
"DSCF9788.jpg",
"DSCF9789.jpg",
"DSCF9790.jpg",
"DSCF9791.jpg",
"DSCF9792.jpg",
"DSCF9793.jpg",
"DSCF9794.jpg",
"DSCF9795.jpg",
"DSCF9796.jpg",
"DSCF9797.jpg",
"DSCF9798.jpg",
"DSCF9799.jpg",
"DSCF9800.jpg",
"DSCF9801.jpg",
"DSCF9802.jpg",
"DSCF9803.jpg",
"DSCF9804.jpg",
"DSCF9805.jpg",
"DSCF9806.jpg",
"DSCF9807.jpg",
"DSCF9808.jpg",
"DSCF9809.jpg",
"DSCF9810.jpg",
"DSCF9811.jpg",
"DSCF9812.jpg",
"DSCF9813.jpg",
"DSCF9814.jpg",
"DSCF9815.jpg",
"DSCF9816.jpg",
"DSCF9817.jpg",
"DSCF9818.jpg",
"DSCF9819.jpg",
"DSCF9820.jpg",
"DSCF9821.jpg",
"DSCF9822.jpg",
"DSCF9823.jpg",
"DSCF9824.jpg",
"DSCF9825.jpg",
"DSCF9826.jpg",
"DSCF9827.jpg",
"DSCF9828.jpg",
"DSCF9829.jpg",
"DSCF9830.jpg",
"DSCF9831.jpg",
"DSCF9832.jpg",
"DSCF9833.jpg",
"DSCF9834.jpg",
"DSCF9835.jpg",
"DSCF9836.jpg",
"DSCF9837.jpg",
"DSCF9838.jpg",
"DSCF9839.jpg",
"DSCF9840.jpg",
"DSCF9841.jpg",
"DSCF9842.jpg",
"DSCF9843.jpg",
"DSCF9844.jpg",
"DSCF9845.jpg",
"DSCF9846.jpg",
"DSCF9847.jpg",
"DSCF9848.jpg",
"DSCF9849.jpg",
"DSCF9850.jpg",
"DSCF9851.jpg",
"DSCF9852.jpg",
"DSCF9853.jpg",
"DSCF9854.jpg",
"DSCF9855.jpg",
"DSCF9856.jpg",
"DSCF9857.jpg",
"DSCF9858.jpg",
"DSCF9859.jpg",
"DSCF9860.jpg",
"DSCF9861.jpg",
"DSCF9862.jpg",
"DSCF9863.jpg",
"DSCF9864.jpg",
"DSCF9865.jpg",
"DSCF9866.jpg",
"DSCF9867.jpg",
"DSCF9868.jpg",
"DSCF9869.jpg",
"DSCF9870.jpg",
"DSCF9871.jpg",
"DSCF9872.jpg",
"DSCF9873.jpg",
"DSCF9874.jpg",
"DSCF9875.jpg",
"DSCF9876.jpg",
"DSCF9877.jpg",
"DSCF9878.jpg",
"DSCF9879.jpg",
"DSCF9880.jpg",
"DSCF9881.jpg",
"DSCF9882.jpg",
"DSCF9883.jpg",
"DSCF9884.jpg",
"DSCF9885.jpg",
"DSCF9886.jpg",
"DSCF9887.jpg",
"DSCF9888.jpg",
"DSCF9889.jpg",
"DSCF9890.jpg",
"DSCF9891.jpg",
"DSCF9892.jpg",
"DSCF9893.jpg",
"DSCF9894.jpg",
"DSCF9895.jpg",
"DSCF9896.jpg",
"DSCF9897.jpg",
"DSCF9898.jpg",
"DSCF9899.jpg",
"DSCF9900.jpg",
"DSCF9901.jpg",
"DSCF9902.jpg",
"DSCF9903.jpg",
"DSCF9904.jpg",
"DSCF9905.jpg",
"DSCF9906.jpg",
"DSCF9907.jpg",
"DSCF9908.jpg",
"DSCF9909.jpg",
"DSCF9910.jpg",
"DSCF9911.jpg",
"DSCF9912.jpg",
"DSCF9913.jpg",
"DSCF9914.jpg",
"DSCF9915.jpg",
"DSCF9916.jpg",
"DSCF9917.jpg",
"DSCF9918.jpg",
"DSCF9919.jpg",
"DSCF9920.jpg",
"DSCF9921.jpg",
"DSCF9922.jpg",
"DSCF9923.jpg",
"DSCF9924.jpg",
"DSCF9925.jpg",
"DSCF9926.jpg",
"DSCF9927.jpg",
"DSCF9928.jpg",
"DSCF9929.jpg",
"DSCF9930.jpg",
"DSCF9931.jpg",
"DSCF9932.jpg",
"DSCF9933.jpg",
"DSCF9934.jpg",
"DSCF9935.jpg",
"DSCF9936.jpg",
"DSCF9937.jpg",
"DSCF9938.jpg",
"DSCF9939.jpg",
"DSCF9940.jpg",
"DSCF9941.jpg",
"DSCF9942.jpg",
"DSCF9943.jpg",
"DSCF9944.jpg",
"DSCF9945.jpg",
"DSCF9946.jpg",
"DSCF9947.jpg",
"DSCF9948.jpg",
"DSCF9949.jpg",
"DSCF9950.jpg",
"DSCF9951.jpg",
"DSCF9952.jpg",
"DSCF9953.jpg",
"DSCF9954.jpg",
"DSCF9955.jpg",
"DSCF9956.jpg",
"DSCF9957.jpg",
"DSCF9958.jpg",
"DSCF9959.jpg",
"DSCF9960.jpg",
"DSCF9961.jpg",
"DSCF9962.jpg",
"DSCF9963.jpg",
"DSCF9964.jpg",
"DSCF9965.jpg",
"DSCF9966.jpg",
"DSCF9967.jpg",
"DSCF9968.jpg",
"DSCF9969.jpg",
"DSCF9970.jpg",
"DSCF9971.jpg",
"DSCF9972.jpg",
"DSCF9973.jpg",
"DSCF9974.jpg",
"DSCF9975.jpg",
"DSCF9976.jpg",
"DSCF9977.jpg",
"DSCF9978.jpg",
"DSCF9979.jpg",
"DSCF9980.jpg",
"DSCF9981.jpg",
"DSCF9982.jpg",
"DSCF9983.jpg",
"DSCF9984.jpg",
"DSCF9985.jpg",
"DSCF9986.jpg",
"DSCF9987.jpg",
"DSCF9988.jpg",
"DSCF9989.jpg",
"DSCF9990.jpg",
"DSCF9991.jpg",
"DSCF9992.jpg",
"DSCF9993.jpg",
"DSCF9994.jpg",
"DSCF9995.jpg",
"DSCF9996.jpg",
"DSCF9997.jpg",
"DSCF9998.jpg",
"DSCF9999.jpg",
"DSCF10000.jpg",

];

function validateAndGenerateSnippet(imagePath) {
    const img = new Image();
    img.onload = () => {
      const snippet = createSnippet(imagePath);
      targetContainer.innerHTML += snippet;
    };
    img.onerror = () => {
      console.error("DSCF9 not found:", imagePath); // Log error details for debugging (optional)
    };
    img.src = imageFolder + imagePath;
  }
  
  // Sort image list in descending order (by filename) before validation
  imageList.sort((a, b) => {
    return b.localeCompare(a); // Descending order based on image names
  });
  
  // Validate all images and generate snippets
  imageList.forEach(validateAndGenerateSnippet);
  
  // Clear the container (optional)
  targetContainer.innerHTML = "";
  // Snippets are generated only for existing images in the `onload` handler