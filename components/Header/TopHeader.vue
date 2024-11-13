<template>
    <div class="header-topbar">
        <div class="container mx-auto px-4">
            <div class="content-topbar flex items-center justify-between py-2">
                <!-- Left section: Find Store & Email -->
                <div class="content-item-text-with-icon flex items-center space-x-8">
                    <!-- Find Store -->
                    <div class="custom-text item">
                        <div class="text-icon1 flex items-center text-sm text-gray-900">
                            <i class="icon-pin mr-2"></i>
                            <a href="#" class="hover:text-blue-600">Find Store</a>
                        </div>
                    </div>

                    <!-- Email Support -->
                    <div class="text-icon2 flex items-center text-sm text-gray-900">
                        <i class="icon-email mr-2"></i>
                        <a href="mailto:support@digic.com" class="hover:text-blue-600">support@digic.com</a>
                    </div>
                </div>

                <!-- Right section: Currency & Language Selector -->
                <div class="content-item-currency flex items-center space-x-8">
                    <!-- Currency Selector -->
                    <div class="language-currency item">
                        <div class="bwp_currency header-selector currencies relative">
                            <div
                                class="header-selector__toggle cursor-pointer px-4 py-2 border rounded-md bg-white flex items-center space-x-2">
                                <span class="current flags_bwp-USD">USD</span>
                                <i class="icon-chevron-down text-gray-500"></i>
                            </div>
                            <div
                                class="dropdown-menu absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                                <ul class="bwp-currency">
                                    <li><a class="currency-item flags_bwp-EUR block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                            href="#" data-currency="EUR">EUR</a></li>
                                    <li><a class="currency-item flags_bwp-USD block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                            href="#" data-currency="USD">USD</a></li>
                                    <li><a class="currency-item flags_bwp-GBP block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                            href="#" data-currency="GBP">GBP</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Language Selector -->
                    <form method="post" action="/localization" id="localization_form" accept-charset="UTF-8"
                        enctype="multipart/form-data">
                        <div class="js-disclosure header-selector header-selector--locale dropdown relative">
                            <div
                                class="header-selector__toggle cursor-pointer px-4 py-2 border rounded-md bg-white flex items-center space-x-2">
                                <span class="text-sm">English</span>
                                <i class="icon-chevron-down text-gray-500"></i>
                            </div>
                            <div
                                class="dropdown-menu absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                                <ul class="header-selector__list">
                                    <li class="header-selector__item">
                                        <a href="#" lang="en"
                                            class="block px-4 py-2 text-gray-700 hover:bg-gray-200">English</a>
                                    </li>
                                    <li class="header-selector__item">
                                        <a href="#" lang="ar"
                                            class="block px-4 py-2 text-gray-700 hover:bg-gray-200">العربية</a>
                                    </li>
                                </ul>
                                <input type="hidden" name="locale_code" value="en">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// You can add logic to handle currency and language changes if needed
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
