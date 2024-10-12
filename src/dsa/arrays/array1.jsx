import React from "react";

function Array1() {
  const pythonCode = `

class Solution:
def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """

    # Step 1: Initialize an empty list nums3 to hold the merged result

    nums3 = []
    start1 = 0  # Pointer for nums1
    start2 = 0  # Pointer for nums2

    # Step 2: Compare elements of nums1 and nums2 one by one

    while start1 < m and start2 < n:
        # If the element in nums1 is smaller, append it to nums3
        if nums1[start1] <= nums2[start2]:
            nums3.append(nums1[start1])
            start1 += 1  # Move pointer in nums1
        # Otherwise, append the element from nums2

        else:
            nums3.append(nums2[start2])
            start2 += 1  # Move pointer in nums2

    # Step 3: Add any remaining elements from nums1 (if any)

    while start1 < m:
        nums3.append(nums1[start1])
        start1 += 1

    # Step 4: Add any remaining elements from nums2 (if any)
    
    while start2 < n:
        nums3.append(nums2[start2])
        start2 += 1

    # Step 5: Copy the merged result from nums3 back into nums1
    for i in range(len(nums3)):
        nums1[i] = nums3[i]

`;

  return (
    <div style={{ textAlign: "center", padding: "20px"}}>
    <br/><br/>
      <h1
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          fontSize: "30px"
        }}
      >
        Merge Sorted Array
      </h1>
      <br/><br/>

      <pre
        style={{
          backgroundColor: "#ffe5b4", // light orange
          padding: "15px",
          borderRadius: "5px",
          textAlign: "left",
          overflowX: "auto", // In case of long code lines
        }}
      >
        <code>{pythonCode}</code>
      </pre>
    </div>
  );
}

export default Array1;
