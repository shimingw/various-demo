const arr = require('./data').arr

function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }
  
    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    // 获取数组中的最小值和最大值
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]; // 输入数据的最小值
      } else if (arr[i] > maxValue) {
        maxValue = arr[i]; // 输入数据的最大值
      }
    }
  
    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5; // 设置桶的默认容纳空间为5
    // 一个桶的容积
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    // 利用最大值和最小的差计算出最多需要几个桶
    // 计算出需要几个桶
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    // 初始化桶数组
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }
  
    //利用映射函数将数据分配到各个桶中
    // (排序数组-最小值)/桶的个数
    // 将数据依次放到每个桶中
    // 根据桶的索引桶里的数据依次增大
    for (i = 0; i < arr.length; i++) {
      // 计算出当前值应该放在第几个桶中
      buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
  
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
      insertionSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
      for (var j = 0; j < buckets[i].length; j++) {
        // 将每个桶按照索引拼接在一起
        arr.push(buckets[i][j]);
      }
    }
    return arr;
  }
  
  function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
    }
    return arr;
  }

  console.log(bucketSort(arr));
  