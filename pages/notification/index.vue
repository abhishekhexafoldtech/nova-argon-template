<template>
    <section class="not_wrap">
        <div class="not_inner">
            <div class="not_title">
                <div>
                    <h3>Notification</h3>
                    <p>You have 3 unread notifications</p>
                </div>
                <el-button class="btn btn-primary">Mark all as Read</el-button>
            </div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <!-- all  -->
                <el-tab-pane label="All(10)" name="all">
                    <div class="box_inner">
                        <div class="box_item active">
                            <figure class="user_icon">
                                <img src="../../assets/img/logos/mastercard.png" alt="">
                            </figure>
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">Yaw graham</a></p>
                                <span>4 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item active">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Yaw graham</a> require new stock.</p>
                                <span>2 hrs ago</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">New graham</a></p>
                                <span>12 jan 2023, 8:00 AM</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Derrick nwafor</a> require new stock.</p>
                                <span>8 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- pending  -->
                <el-tab-pane label="Pending requests(3)" name="pending">
                    <div class="box_inner">
                        <div class="box_item active">
                            <figure class="user_icon">
                                <img src="../../assets/img/logos/mastercard.png" alt="">
                            </figure>
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">Yaw graham</a></p>
                                <span>5 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item active">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Yaw graham</a> require new stock.</p>
                                <span>2 hrs ago</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">New graham</a></p>
                                <span>12 jan 2023, 8:00 AM</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Derrick nwafor</a> require new stock.</p>
                                <span>8 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- stock  -->
                <el-tab-pane label="Stock request(2)" name="stock">
                    <div class="box_inner">
                        <div class="box_item active">
                            <figure class="user_icon">
                                <img src="../../assets/img/logos/mastercard.png" alt="">
                            </figure>
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">Yaw graham</a></p>
                                <span>6 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item active">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Yaw graham</a> require new stock.</p>
                                <span>2 hrs ago</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">New graham</a></p>
                                <span>12 jan 2023, 8:00 AM</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Derrick nwafor</a> require new stock.</p>
                                <span>8 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- other  -->
                <el-tab-pane label="Other(2)" name="other">
                    <div class="box_inner">
                        <div class="box_item active">
                            <figure class="user_icon">
                                <img src="../../assets/img/logos/mastercard.png" alt="">
                            </figure>
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">Yaw graham</a></p>
                                <span>7 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item active">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Yaw graham</a> require new stock.</p>
                                <span>2 hrs ago</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p>Approve onboarding request for <a href="#">New graham</a></p>
                                <span>12 jan 2023, 8:00 AM</span>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                        <div class="box_item">
                            <img class="user_img" src="../../assets/img/team-2.jpg" alt="">
                            <div class="box_con">
                                <p><a href="#">Derrick nwafor</a> require new stock.</p>
                                <span>8 hrs ago</span>
                                <div class="box_act">
                                    <button>Decline</button>
                                    <button class="accept_btn">Approve</button>
                                </div>
                            </div>
                            <button class="not_delete">
                                <i class="ri-delete-bin-5-fill"></i>
                            </button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </section>
</template>

<script setup>
const activeName = ref("all");


</script>