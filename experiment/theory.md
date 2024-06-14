Let V be a vector space over a field F≡R or C, where R is the set of real numbers and C is the set of complex numbers.<br>
**1. Definition:** A non-empty subset W of V is called a subspace if it is a vector space with respect to the addition and scalar multiplication defined on V.<br>
**2. Characterization:** A set W is a subspace of V if and only if <br>
  i.   W ⊆ V <br>
  ii.  0 ∈ W <br>
  iii. x + y ∈ W; where x ∈ W , y ∈ W and <br>
  iv.  α . x ∈ W; where x ∈ W , α ∈ F <br>
**3. Examples - I:** <br>
  i.	 Every vector space V is a subspace of itself. <br>
  ii.	 {0} is a subspace of V. <br>
  iii. {0} is the only subspace of the vector space {0} over F. <br>
**4. Examples -II:** <br>
	W<sub>1</sub>={(x, 0, 0, …0) ∈ R<sup>n</sup> : x ∈ R} is a subspace of the vector space R<sup>n</sup> over R. <br> 
 	Reason: Clearly W<sub>1</sub>&#8838;R<sup>n</sup> and (0, 0, 0…, 0)&isin; W<sub>1</sub>. Further,  (x, 0, 0, …0)+ (y, 0, 0, …, 0)=(x+y, 0, 0, …, 		0)&isin;W<sub>1</sub>; where (x, 0, 0, …, 0) &isin;W<sub>1</sub>, (y, 0, 0, …, 0)&isin;W<sub>1</sub>  and α.(x, 0, 0, …, 0)=(α.x, 0, 0, …, 			0)&isin;W<sub>1</sub>; where (x, 0, 0, …, 0)&isin;W<sub>1</sub>, α&isin;F. Using the characterization given in Section2, we have the required result. <br>
	W<sub>2</sub>={(x, x, 0) ∈ R<sup>3</sup> : x ∈ R} is a subspace of the vector space R<sup>3</sup> over R. <br>
 	Reason: It is the same as discussed in Example(i) above. <br>
	W<sub>3</sub>={(x, x, x) ∈ R<sup>3</sup> : x ∈ R} is  a subspace of the vector space R<sup>3</sup> over R. <br>
	Reason: It is the same as discussed in Example(i) above. <br>
	Let M<sub>2 x 2</sub> be the collection of 2x2 matrices with real entries. Then M<sub>2 x 2</sub> forms a vector space over R with respect to matrix addition and matrix scalar multiplication and 
W<sub>4</sub>={ $\left[\begin{array}{ccc}
a & b\\
c & 0
\end{array}\right]$ ∈ M<sub>2 x 2</sub>: a, b, c ∈ R} is a subspace of the vector space M<sub>2 x 2</sub>. <br>
Reason: It is the same as discussed in Example(i) above. <br>
W<sub>5</sub>={(x+2, x, x) ∈ R<sup>3</sup> : x ∈ R} is not a subspace of the vector space R<sup>3</sup> over R in view of Section 2. it does not contains (0, 0, 0) which is the zero of the vector space R<sup>3</sup> over R . <br> 
 	Thus it may be noted that a subset of a vector space need not to be its subspace. <br>
**5. Definitions:** The subspaces V and {0} of V are called improper subspaces of V and subspaces other than V and {0} are called proper. <br> 
**6. Subspaces of R:** Subspaces of the vector space R over R are {0} and R only. That is, <br> 
(i)   W ≡ {0} is a subspace of the vector space R over R, <br>
(ii)  W ≡ R itself is a subspace of the vector space R over R and <br>
(iii) If W is a subspace of the vector space R over R,  then W = {0} or R.  <br>
**Proof:** <br> 
(i)   Clearly W ⊆ R and 0 ∈ W. Let x, y ∈ W and α ∈ R. Then x = y = 0. Hence x + y = 0 ∈ W and α . x = 0 ∈ W. Hence W ≡ {0} is a subspace. <br>
(ii)  Clearly W ⊆ R and 0 ∈ W. Let x, y ∈ R and α ∈ R. Hence x + y ∈ R and α . x ∈ R. Hence W ≡ R is a subspace. <br>
(iii) Let W be a subspace and W ≠ {0}. We prove that W = R. Clearly W ⊆ R. Let x ∈ R. Then for y ∈ W, y ≠ 0, we have x = (x/y).y. Since (x/y).y ∈ W, x ∈ W. This shows that R ⊆ W. Hence R = W. <br>
**7. Subspaces of R<sup>2</sup>:** Subspaces of the vector space R2 over R are precisely {0}, R and lines passing through origin. That is, <br>
(i)   W≡{(0,0)} is a subspace of the vector space R2 over R. <br>
(ii)  W≡R2 is a subspace of the vector space R2 over R. <br> 
(iii) If W is a line passing through origin, then W is a subspace of the vector space R2 over R and <br> 
(iv)  If W is a subspace of the vector space R2 over R, then W={0} or R2 or a line passing through origin. <br> 
**Proof:** <br> 
(i)   It is similar to that of 5(i). <br>
(ii)  It is similar to that of 5(ii). <br>
(iii) Clearly W ≡ {(x, y) ∈ R<sup>2</sup> : ax + by = 0}, for some a, b ∈ R, such that either a \ne 0 or b \ne 0. Notice that W is the line y = mx or x = 0, where m ∈ R. Clearly W ⊆ R<sup>2</sup> and (0 , 0) ∈ W. Let (r , s) , (t , u) ∈ W. Hence ar + bs = 0, at + bu = 0. Then  (r , s) + (t , u) = (r+t , s+u) ∈ W, since a(r + t) + b(s + u)=[(ar + bs) + (at + bu)] = 0. Also α.(r, s) = (α.r , α.s) ∈W, since a(α.r) + b(α.s) = 0. Hence W is a subspace. <br>
(iv)  Let W be a subspace of R<sup>2</sup> other than {(0, 0)} and R<sup>2</sup>. We prove that W is a line passing through the origin. Let (c, d) ∈ W such that (c, d) \ne 0. We claim that W is the line L passing through (c, d) and origin. Then L= {(x, y) ∈ R<sup>2</sup> : dx - cy = 0}. Clearly L ⊆ W and we prove that W ⊆ L. Let (m, n) ∈ W such that (m, n) ≠ (0, 0). To the contrary, let (m, n) ∉ L. For (x, y) ∈ R<sup>2</sup>; one can obtain α, β ∈ R such that (x, y)=α.(m, n) + β.(c, d). Then (x, y) ∈ W. Hence W ≡ R<sup>2</sup>, a contradiction. This completes the proof. <br>
**8.Properties of Subspaces:** <br> 
Let W<sub>1</sub> and W<sub>2</sub> be the subspaces of V. Then,  <br>
i.   Intersection of W<sub>1</sub> and W<sub>2</sub> i.e., W<sub>1</sub> ∩ W<sub>2</sub>  is also a subspace of V. <br>
ii.  Union of W<sub>1</sub> and W<sub>2</sub> i.e.,W<sub>1</sub> ⋃ W<sub>2</sub>  may or may not be a subspace of V. <br>
iii. Union of W<sub>1</sub> and W<sub>2</sub> i.e., W<sub>1</sub> ⋃ W<sub>2</sub>  is a subspace of V if and only if W<sub>1</sub> ⊆ W<sub>2</sub> or W<sub>2</sub> ⊆ W<sub>1</sub>. <br>
iv.  W<sub>1</sub> + W<sub>2</sub> ≡ {x + y : x ∈ W<sub>1</sub>, y ∈ W<sub>2</sub>} is a subspace of V. <br>
v.   W<sub>1</sub> + W<sub>2</sub> = span (W<sub>1</sub> ⋃ W<sub>2</sub>). <br>
vi.  W<sub>1</sub> + W<sub>2</sub> is the smallest subspace containing W<sub>1</sub> and W<sub>2</sub>. <br>
